// https://vike.dev/Head

import ogImageUrl from "../../../assets/fluirzen-og-en.webp";

export default function HeadDefault() {
  return (
    <>
      <meta property="og:image" content={ogImageUrl} />
    </>
  );
}
