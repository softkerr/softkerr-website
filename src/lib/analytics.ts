/**
 * Google Analytics Event Tracking Utilities
 * Track custom events to understand user behavior
 */

// Extend Window type for gtag
declare global {
  interface Window {
    gtag?: (
      command: 'event' | 'config' | 'js',
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
  }
}

/**
 * Track a custom event
 */
export const trackEvent = (
  eventName: string,
  params?: Record<string, string | number | boolean>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }
};

/**
 * Homepage Events
 */
export const homeEvents = {
  // Hero interactions
  heroCtaClick: (ctaType: 'primary' | 'secondary') =>
    trackEvent('hero_cta_click', {
      cta_type: ctaType,
      page: 'home',
    }),

  // Service preview clicks
  serviceCardClick: (serviceName: string) =>
    trackEvent('service_card_click', {
      service_name: serviceName,
      section: 'services_preview',
    }),

  // Project showcase
  projectView: (projectName: string) =>
    trackEvent('project_view', {
      project_name: projectName,
      section: 'featured_projects',
    }),

  projectCtaClick: (projectName: string) =>
    trackEvent('project_cta_click', {
      project_name: projectName,
      action: 'view_details',
    }),

  // FAQ interaction
  faqExpand: (question: string) =>
    trackEvent('faq_expand', {
      question_text: question.substring(0, 100), // Limit length
      page: 'home',
    }),

  // CTA section
  ctaClick: (ctaText: string) =>
    trackEvent('cta_click', {
      cta_text: ctaText,
      section: 'home_cta',
    }),
};

/**
 * Contacts Page Events
 */
export const contactEvents = {
  // Form interactions
  formStart: () =>
    trackEvent('form_start', {
      form_type: 'contact',
      page: 'contacts',
    }),

  formFieldFocus: (fieldName: string) =>
    trackEvent('form_field_focus', {
      field_name: fieldName,
      form_type: 'contact',
    }),

  formSubmit: (formType: 'contact' | 'book_call') =>
    trackEvent('form_submit', {
      form_type: formType,
      page: 'contacts',
    }),

  formSuccess: (formType: 'contact' | 'book_call') =>
    trackEvent('form_success', {
      form_type: formType,
      page: 'contacts',
    }),

  formError: (errorMessage: string) =>
    trackEvent('form_error', {
      error_message: errorMessage,
      page: 'contacts',
    }),

  // Quick contact clicks
  emailClick: () =>
    trackEvent('contact_method_click', {
      method: 'email',
      page: 'contacts',
    }),

  phoneClick: () =>
    trackEvent('contact_method_click', {
      method: 'phone',
      page: 'contacts',
    }),

  addressClick: () =>
    trackEvent('contact_method_click', {
      method: 'address',
      page: 'contacts',
    }),

  // Social links
  socialClick: (platform: string) =>
    trackEvent('social_click', {
      platform,
      page: 'contacts',
    }),

  // Office location interactions
  officeLocationView: (location: string) =>
    trackEvent('office_location_view', {
      office_location: location,
      page: 'contacts',
    }),
};

/**
 * Projects Page Events
 */
export const projectEvents = {
  // Project navigation
  projectScroll: (projectName: string) =>
    trackEvent('project_scroll', {
      project_name: projectName,
      interaction: 'scroll_to_view',
    }),

  // Video interactions
  videoPlay: (projectName: string) =>
    trackEvent('video_play', {
      project_name: projectName,
      video_type: 'project_showcase',
    }),

  videoPause: (projectName: string, watchTime: number) =>
    trackEvent('video_pause', {
      project_name: projectName,
      watch_time_seconds: Math.round(watchTime),
    }),

  videoComplete: (projectName: string) =>
    trackEvent('video_complete', {
      project_name: projectName,
      video_type: 'project_showcase',
    }),

  // Technology interest
  techStackClick: (technology: string, projectName: string) =>
    trackEvent('tech_stack_click', {
      technology,
      project_name: projectName,
    }),

  // Testimonial interaction
  testimonialView: (projectName: string) =>
    trackEvent('testimonial_view', {
      project_name: projectName,
    }),

  // Feature exploration
  featureView: (featureTitle: string, projectName: string) =>
    trackEvent('feature_view', {
      feature_title: featureTitle,
      project_name: projectName,
    }),
};

/**
 * Dedicated Team Page Events
 */
export const teamEvents = {
  // Hero CTA
  heroCta: (ctaType: string) =>
    trackEvent('team_hero_cta', {
      cta_type: ctaType,
      page: 'dedicated_team',
    }),

  // Team member interactions
  teamMemberView: (memberName: string, role: string) =>
    trackEvent('team_member_view', {
      member_name: memberName,
      member_role: role,
    }),

  teamMemberExpand: (memberName: string) =>
    trackEvent('team_member_expand', {
      member_name: memberName,
      action: 'view_details',
    }),

  // Sprint timeline
  sprintStepView: (stepNumber: number, stepName: string) =>
    trackEvent('sprint_step_view', {
      step_number: stepNumber,
      step_name: stepName,
    }),

  // How we work section
  workProcessExpand: (processName: string) =>
    trackEvent('work_process_expand', {
      process_name: processName,
    }),

  // CTA clicks
  bookTeamClick: () =>
    trackEvent('book_team_click', {
      page: 'dedicated_team',
    }),
};

/**
 * Pricing Page Events
 */
export const pricingEvents = {
  // Calculator interactions
  calculatorStart: () =>
    trackEvent('calculator_start', {
      tool_type: 'pricing_calculator',
    }),

  calculatorStepComplete: (step: number | string, stepName: string) =>
    trackEvent('calculator_step_complete', {
      step_number: typeof step === 'number' ? step : parseInt(step, 10) || 0,
      step_name: stepName,
    }),

  calculatorOptionSelect: (category: string, option: string) =>
    trackEvent('calculator_option_select', {
      category,
      option,
    }),

  calculatorComplete: (estimatedPrice: string, complexity: string) =>
    trackEvent('calculator_complete', {
      estimated_price: estimatedPrice,
      project_complexity: complexity,
    }),

  calculatorReset: () =>
    trackEvent('calculator_reset', {
      action: 'start_over',
    }),

  // Quote request
  quoteRequest: (estimatedPrice: string) =>
    trackEvent('quote_request', {
      estimated_price: estimatedPrice,
      source: 'calculator',
    }),

  // Pricing factors exploration
  pricingFactorExpand: (factorName: string) =>
    trackEvent('pricing_factor_expand', {
      factor_name: factorName,
    }),

  // Budget comparison
  budgetCompare: (selectedBudget: string) =>
    trackEvent('budget_compare', {
      budget_range: selectedBudget,
    }),
};

/**
 * General Events (across all pages)
 */
export const generalEvents = {
  // Book a call modal
  bookCallModalOpen: (source: string) =>
    trackEvent('book_call_modal_open', {
      trigger_source: source,
    }),

  bookCallModalClose: () => trackEvent('book_call_modal_close', {}),

  bookCallSubmit: () =>
    trackEvent('book_call_submit', {
      conversion: true,
    }),

  // Navigation
  navigationClick: (menuItem: string) =>
    trackEvent('navigation_click', {
      menu_item: menuItem,
    }),

  // Scroll depth
  scrollDepth: (percentage: number, page: string) =>
    trackEvent('scroll_depth', {
      depth_percentage: percentage,
      page,
    }),

  // Time on page
  timeOnPage: (seconds: number, page: string) =>
    trackEvent('time_on_page', {
      duration_seconds: seconds,
      page,
    }),

  // External links
  externalLinkClick: (url: string, linkText: string) =>
    trackEvent('external_link_click', {
      destination_url: url,
      link_text: linkText,
    }),
};

/**
 * Conversion Events (most important)
 */
export const conversionEvents = {
  // Lead generation
  leadCaptured: (source: string) =>
    trackEvent('lead_captured', {
      lead_source: source,
      conversion: true,
    }),

  // Contact form
  contactFormSubmit: (formType: string) =>
    trackEvent('contact_form_submit', {
      form_type: formType,
      conversion: true,
    }),

  // Downloads
  downloadStart: (resourceName: string) =>
    trackEvent('download_start', {
      resource_name: resourceName,
    }),
};
