import { useTranslation } from "react-i18next";
import back from "../assets/images/back-sky.webp";

export default function Home() {
  const { t } = useTranslation();
  return (
    <div
      className="text-center text-white"
      style={{ backgroundImage: `url(${back})`, minHeight: "250vh" }}
    >
      <section className="d-flex" style={{ minHeight: "100vh" }}>
        <div className="m-auto">
          <h1>{t("appName")}</h1>
          <h4>{t("appSlogan")}</h4>
          <p>{t("underConstructionInfo")}</p>
        </div>
      </section>
    </div>
  );
}
