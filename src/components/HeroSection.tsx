import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import VideoPlayer from "./videoPlayer/VideoPlayer";

export default function HeroSection() {
  const { t } = useTranslation();
  return (
    <section id="hero" className="d-flex" style={{ minHeight: "100vh" }}>
      <div className="d-flex w-100">
        <Row className="w-100 my-auto">
          <Col sm="1" lg="1" />
          <Col sm="6" className="text-start">
            <h1 className="text-uppercase">{t("appName")}</h1>
            <VideoPlayer />
          </Col>
          <Col sm="4" className="text-start d-flex">
            <div className="my-auto">
              <h2>{t("appSlogan")}</h2>
              <p dangerouslySetInnerHTML={{ __html: t("heroText") }} />
            </div>
          </Col>
          <Col sm="1" />
        </Row>
      </div>
    </section>
  );
}
