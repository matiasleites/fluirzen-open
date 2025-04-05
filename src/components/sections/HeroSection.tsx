import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import VideoPlayerPreview from "../videoPlayer/VideoPlayerPreview";
import { UseAppContext } from "../../context/UseAppContext";

export default function HeroSection() {
  const { t } = useTranslation();
  const { isMobile } = UseAppContext();
  return (
    <section
      id="hero"
      className="d-flex flex-column"
      style={{ minHeight: "100vh" }}
    >
      <div className="d-flex w-100 my-auto">
        <Row className="w-100 my-auto mx-auto">
          <Col sm="1" lg="1" />
          <Col sm="6" className={isMobile ? "text-center pt-3" : "text-start"}>
            <h1 className="text-uppercase">{t("appName")}</h1>
            <VideoPlayerPreview />
          </Col>
          <Col
            sm="4"
            className={"text-start d-flex " + (isMobile ? "py-3" : " ")}
          >
            <div className="my-auto">
              <h2 className="text-uppercase">{t("appSlogan")}</h2>
              <p dangerouslySetInnerHTML={{ __html: t("heroText") }} />
            </div>
          </Col>
          <Col sm="1" />
        </Row>
      </div>
      <h2
        className={
          "text-uppercase mb-0 mt-auto " +
          (isMobile ? "text-start mx-2" : "text-center")
        }
      >
        {t("heroInfoSubtitle")}
      </h2>
    </section>
  );
}
