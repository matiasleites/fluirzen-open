import { t } from "i18next";

export default function VideoPlayerPreview() {
  return (
    <div
      className="bg-black w-100 d-flex rounded"
      style={{ minHeight: "55vh" }}
    >
      <div className="m-auto">
        <h1>Video Player</h1>
        <p className="text-center">{t("underConstructionInfo")}</p>
      </div>
    </div>
  );
}
