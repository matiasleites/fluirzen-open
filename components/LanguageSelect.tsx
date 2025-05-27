import { usePageContext } from "vike-react/usePageContext";

export default function LanguageSelect({ className }: { className: string }) {
  const pageContext = usePageContext();
  const { urlPathname } = pageContext;
  function isActive(href: string) {
    return href === "/" ? urlPathname === href : urlPathname.startsWith(href);
  }

  const languages = [
    {
      name: "Português",
      href: "/",
    },
    {
      name: "English",
      href: "/en",
    },
    {
      name: "Español",
      href: "/es",
    },
  ];

  return (
    <div className={`language-select ${className}`}>
      {languages.map((language) => (
        <a key={language.name} href={language.href} className={`mx-3 ${isActive(language.href) ? "link-white" : ""}`}>
          {language.name}
        </a>
      ))}
    </div>
  );
}
