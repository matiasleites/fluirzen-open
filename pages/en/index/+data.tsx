import i18next from "i18next";
import { useConfig } from "vike-react/useConfig"; // or vike-{vue,solid}
import { PageContextServer } from "vike/types";

export async function data(pageContext: PageContextServer) {
  const config = useConfig();

  await i18next.init({
    lng: "en",
  });

  config({
    title: `${i18next.t("appName")} | ${i18next.t("appSlogan")}`,
    description: i18next.t("appDescription"),
  });

  return {};
}
