// https://vike.dev/Head

import ogImageUrl from "../../assets/fluirzen-og-pt.webp";

export default function HeadDefault() {
  return (
    <>
      <meta property="og:image" content={ogImageUrl} />
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-H5T6KDHQJK"></script>
      <link rel="canonical" href="https://fluirzen.com" />
      <script
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          dataLayer.push(arguments);
        }
        gtag("js", new Date());
        gtag("config", "G-H5T6KDHQJK");
      `,
        }}
      />
    </>
  );
}
