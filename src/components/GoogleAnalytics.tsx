import Script from 'next/script';

export default function GoogleAnalytics() {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  // Don't load GA in development or if ID is not set
  if (!GA_MEASUREMENT_ID || process.env.NODE_ENV === 'development') {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          // Bot Detection Configuration
          const BOT_DETECTION = {
            minTimeOnPage: 2000, // 2 seconds minimum
            requireInteraction: true,
            checkVisibility: true
          };

          let realUserDetected = false;
          let pageViewSent = false;
          let interactionDetected = false;
          let pageLoadTime = Date.now();

          // Enhanced bot detection
          function isLikelyBot() {
            // Check for headless browsers and bot user agents
            const botPatterns = /bot|crawler|spider|crawling|lighthouse|gtmetrix|headless/i;
            const userAgent = navigator.userAgent;
            
            if (botPatterns.test(userAgent)) {
              return true;
            }

            // Check for webdriver (automated browsers)
            if (navigator.webdriver) {
              return true;
            }

            // Check for headless Chrome
            if (window.chrome && !window.chrome.runtime) {
              return true;
            }

            // Check for missing features that real browsers have
            if (!navigator.plugins || navigator.plugins.length === 0) {
              return true;
            }

            return false;
          }

          // Send page view only for real users
          function sendRealPageView() {
            if (pageViewSent || isLikelyBot()) {
              console.log('[Analytics] Bot detected, skipping tracking');
              return;
            }

            pageViewSent = true;
            
            const urlParams = new URLSearchParams(window.location.search);
            
            // Use short hash-based IDs for cleaner URLs
            const campaignId = urlParams.get('cid'); // Campaign ID (e.g., 'c1a2b3')
            const sourceId = urlParams.get('sid'); // Source ID (e.g., 's4d5e6')
            const refId = urlParams.get('rid'); // Reference/Prospect ID (e.g., 'r7f8g9')
            
            // Legacy UTM support (backward compatibility)
            const utmSource = urlParams.get('utm_source');
            const utmMedium = urlParams.get('utm_medium');
            const utmCampaign = urlParams.get('utm_campaign');
            
            const timeOnPage = Date.now() - pageLoadTime;

            // Configure GA4 with enhanced bot filtering
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              page_title: document.title,
              campaign_source: sourceId || utmSource || 'direct',
              campaign_medium: utmMedium || 'none',
              campaign_name: campaignId || utmCampaign || 'none',
              engagement_time_msec: timeOnPage,
              cookie_flags: 'SameSite=None;Secure'
            });

            // Send custom event for tracking
            gtag('event', 'real_user_page_view', {
              page_location: window.location.href,
              page_path: window.location.pathname,
              time_to_interaction: timeOnPage,
              has_interaction: interactionDetected,
              campaign_id: campaignId || utmCampaign || 'none',
              source_id: sourceId || utmSource || 'direct',
              medium_id: utmMedium || 'none',
              prospect_id: refId || 'none'
            });

            console.log('[Analytics] Real user page view tracked', {
              timeOnPage: timeOnPage + 'ms',
              campaign: campaignId || utmCampaign || 'none'
            });
          }

          // Track user interactions (proves it's a real human)
          function handleUserInteraction() {
            if (!interactionDetected) {
              interactionDetected = true;
              realUserDetected = true;
              
              const timeToInteraction = Date.now() - pageLoadTime;
              
              // Only track if enough time has passed (not a prefetch bot)
              if (timeToInteraction >= BOT_DETECTION.minTimeOnPage) {
                sendRealPageView();
              }
            }
          }

          // Events that indicate real user activity
          const interactionEvents = [
            'click', 
            'scroll', 
            'mousemove', 
            'touchstart', 
            'keypress',
            'resize'
          ];

          // Add interaction listeners
          interactionEvents.forEach(eventType => {
            document.addEventListener(eventType, handleUserInteraction, { 
              once: true, 
              passive: true,
              capture: true 
            });
          });

          // Visibility check (tab is actually visible)
          function handleVisibilityChange() {
            if (document.visibilityState === 'visible' && !pageViewSent) {
              const timeElapsed = Date.now() - pageLoadTime;
              
              // If page stays visible for 2+ seconds, likely a real user
              if (timeElapsed >= BOT_DETECTION.minTimeOnPage && !isLikelyBot()) {
                realUserDetected = true;
                sendRealPageView();
              }
            }
          }

          document.addEventListener('visibilitychange', handleVisibilityChange);

          // Fallback: If user stays on page for 3 seconds without interaction
          // This catches users who are reading but not interacting
          setTimeout(() => {
            if (!pageViewSent && 
                document.visibilityState === 'visible' && 
                !isLikelyBot()) {
              realUserDetected = true;
              sendRealPageView();
            }
          }, BOT_DETECTION.minTimeOnPage + 1000);

          // Track engagement time on page leave
          window.addEventListener('beforeunload', () => {
            if (realUserDetected && pageViewSent) {
              const engagementTime = Date.now() - pageLoadTime;
              
              gtag('event', 'user_engagement', {
                engagement_time_msec: engagementTime,
                had_interaction: interactionDetected
              });
            }
          });

          // Track scroll depth for engaged users
          let maxScrollDepth = 0;
          window.addEventListener('scroll', () => {
            if (realUserDetected) {
              const scrollPercentage = Math.round(
                (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
              );
              
              if (scrollPercentage > maxScrollDepth) {
                maxScrollDepth = scrollPercentage;
                
                // Track milestone scroll depths
                if ([25, 50, 75, 100].includes(scrollPercentage)) {
                  gtag('event', 'scroll_depth', {
                    scroll_depth: scrollPercentage,
                    page_path: window.location.pathname
                  });
                }
              }
            }
          }, { passive: true });
        `}
      </Script>
    </>
  );
}
