import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://wunple.com"),
  title: "Wunple — Better Care. Happier Pets.",
  description:
    "Thoughtfully made pet-care essentials for dogs and cats. Coat Ease shampoo, Itch Relief formula, and targeted Selamide Spot On care.",
  keywords: [
    "Wunple",
    "pet care",
    "dog shampoo",
    "cat shampoo",
    "Coat Ease",
    "Itch Relief",
    "Selamide Spot On",
    "pet grooming India"
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
    shortcut: "/favicon.ico"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Googlebot Favicon Direct HTML Links */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon-512.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />

        {/* Google Analytics 4 (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2BD2GYS22N"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2BD2GYS22N', {
              page_path: window.location.pathname,
            });

            // Automated Outbound Lead Tracking (Amazon & WhatsApp)
            if (typeof document !== 'undefined') {
              document.addEventListener('click', function(e) {
                var link = e.target.closest('a');
                if (!link || !link.href) return;
                
                var href = link.href.toLowerCase();
                if (href.indexOf('amzn.in') !== -1 || href.indexOf('amazon.') !== -1) {
                  if (typeof window.gtag === 'function') {
                    window.gtag('event', 'amazon_click', {
                      event_category: 'Outbound Conversion',
                      event_label: link.getAttribute('title') || link.innerText.trim() || 'Amazon Purchase',
                      destination_url: link.href
                    });
                  }
                } else if (href.indexOf('wa.me') !== -1 || href.indexOf('whatsapp.com') !== -1) {
                  if (typeof window.gtag === 'function') {
                    window.gtag('event', 'whatsapp_order_click', {
                      event_category: 'Direct Lead',
                      event_label: link.getAttribute('title') || 'WhatsApp Order Inquiry',
                      destination_url: link.href
                    });
                  }
                }
              });
            }
          `}
        </Script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // 1. Filter out browser extension hydration mismatch noise from dev overlay
                if (typeof window !== 'undefined') {
                  var origError = console.error;
                  console.error = function() {
                    var args = Array.prototype.slice.call(arguments);
                    var text = args.map(function(a) {
                      return typeof a === 'string' ? a : (a && (a.message || a.stack)) || '';
                    }).join(' ');
                    if (
                      text.indexOf('bis_skin_checked') !== -1 ||
                      text.indexOf('hydration-mismatch') !== -1 ||
                      text.indexOf('A tree hydrated') !== -1 ||
                      text.indexOf('did not match') !== -1 ||
                      text.indexOf('Hydration failed') !== -1
                    ) {
                      return;
                    }
                    return origError.apply(console, args);
                  };

                  // 2. Real-time removal of bis_skin_checked added by browser extensions
                  function stripBis() {
                    try {
                      var els = document.querySelectorAll('[bis_skin_checked]');
                      for (var i = 0; i < els.length; i++) {
                        els[i].removeAttribute('bis_skin_checked');
                      }
                    } catch(e) {}
                  }
                  stripBis();
                  if (typeof MutationObserver !== 'undefined') {
                    var observer = new MutationObserver(function(mutations) {
                      for (var i = 0; i < mutations.length; i++) {
                        var m = mutations[i];
                        if (m.type === 'attributes' && m.attributeName === 'bis_skin_checked') {
                          m.target.removeAttribute('bis_skin_checked');
                        }
                      }
                    });
                    observer.observe(document.documentElement, {
                      attributes: true,
                      subtree: true,
                      attributeFilter: ['bis_skin_checked']
                    });
                  }
                  window.addEventListener('DOMContentLoaded', stripBis);
                }
              })();
            `
          }}
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
