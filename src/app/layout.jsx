import '../../styles/globals.css';
import Script from 'next/script';

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
      <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-PYS09MH9WC"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-PYS09MH9WC');
</script>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
