import Script from 'next/script';
import '../../styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics script (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PYS09MH9WC"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PYS09MH9WC');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
