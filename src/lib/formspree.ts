/**
 * Formspree Integration Utilities
 * Reusable functions for submitting forms to Formspree
 */

export interface FormspreeSubmissionOptions {
  /**
   * Formspree form ID. If not provided, uses NEXT_PUBLIC_FORMSPREE_FORM_ID from env
   */
  formId?: string;

  /**
   * Form data to submit
   */
  data: Record<string, any>;

  /**
   * Custom email subject line
   * Can use template strings like: "New inquiry from {fullName}"
   */
  subject?: string;

  /**
   * Email address to set as reply-to
   */
  replyTo?: string;

  /**
   * Additional Formspree special fields
   */
  extras?: {
    /**
     * URL to redirect to after submission (requires Formspree Gold plan)
     */
    next?: string;

    /**
     * CC email addresses
     */
    cc?: string | string[];

    /**
     * BCC email addresses
     */
    bcc?: string | string[];
  };
}

export interface FormspreeResponse {
  success: boolean;
  message?: string;
  errors?: Record<string, string[]>;
}

/**
 * Submit form data to Formspree
 *
 * @example
 * ```tsx
 * const result = await submitToFormspree({
 *   data: { name: 'John', email: 'john@example.com' },
 *   subject: 'New contact from {name}',
 *   replyTo: '{email}'
 * });
 * ```
 */
export async function submitToFormspree(
  options: FormspreeSubmissionOptions
): Promise<FormspreeResponse> {
  const {
    formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID,
    data,
    subject,
    replyTo,
    extras = {},
  } = options;

  if (!formId || formId === 'YOUR_FORM_ID') {
    throw new Error(
      'Formspree Form ID is not configured. Please set NEXT_PUBLIC_FORMSPREE_FORM_ID in your .env.local file'
    );
  }

  try {
    // Replace template variables in subject and replyTo
    const processedSubject = subject ? replaceTemplateVars(subject, data) : undefined;
    const processedReplyTo = replyTo ? replaceTemplateVars(replyTo, data) : undefined;

    // Build the payload
    const payload: Record<string, any> = {
      ...data,
    };

    // Add Formspree special fields
    if (processedSubject) {
      payload._subject = processedSubject;
    }

    if (processedReplyTo) {
      payload._replyto = processedReplyTo;
    }

    if (extras.next) {
      payload._next = extras.next;
    }

    if (extras.cc) {
      payload._cc = Array.isArray(extras.cc) ? extras.cc.join(',') : extras.cc;
    }

    if (extras.bcc) {
      payload._bcc = Array.isArray(extras.bcc) ? extras.bcc.join(',') : extras.bcc;
    }

    const response = await fetch(`https://formspree.io/f/${formId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: result.error || 'Form submission failed',
        errors: result.errors,
      };
    }

    return {
      success: true,
      message: 'Form submitted successfully',
    };
  } catch (error) {
    console.error('Formspree submission error:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'An unexpected error occurred',
    };
  }
}

/**
 * Replace template variables in a string
 * Example: "Hello {name}" with data { name: "John" } becomes "Hello John"
 */
function replaceTemplateVars(template: string, data: Record<string, any>): string {
  return template.replace(/\{(\w+)\}/g, (match, key) => {
    return data[key] !== undefined ? String(data[key]) : match;
  });
}

/**
 * Hook for using Formspree in React components
 * Provides state management for form submissions
 */
export function useFormspreeSubmit() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  const submit = async (options: FormspreeSubmissionOptions) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage(null);

    try {
      const result = await submitToFormspree(options);

      if (result.success) {
        setSubmitStatus('success');
        return { success: true };
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.message || 'Submission failed');
        return { success: false, error: result.message };
      }
    } catch (error) {
      setSubmitStatus('error');
      const message = error instanceof Error ? error.message : 'An unexpected error occurred';
      setErrorMessage(message);
      return { success: false, error: message };
    } finally {
      setIsSubmitting(false);
    }
  };

  const reset = () => {
    setIsSubmitting(false);
    setSubmitStatus('idle');
    setErrorMessage(null);
  };

  return {
    submit,
    isSubmitting,
    submitStatus,
    errorMessage,
    reset,
  };
}

// Import React for the hook
import React from 'react';
