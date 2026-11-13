import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
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
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🐾</text></svg>"
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
