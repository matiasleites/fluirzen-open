import { useTranslation } from "react-i18next";
import ContentContainer from "../ContentContainer";
export default function Error404Page() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-row items-center justify-center h-screen">
      <ContentContainer className="w-full">
        <div className="col-span-0 md:col-span-1" />
        <div className="col-span-12 md:col-span-11 flex flex-col items-center justify-center">
          <h1 className="mb-0 line-1-2">{t("appName")}</h1>
          <h1>{t("404Title")}</h1>
          <p className="mb-3">{t("404Description")}</p>
          <a href="/">{t("404Button")}</a>
        </div>
      </ContentContainer>
    </div>
  );
}
