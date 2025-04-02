import { Col, Row, Image } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { UseAppContext } from "../../context/AppContext";
import matias from "../../assets/images/matias.webp";

export default function AboutSection() {
  const { t } = useTranslation();
  const { isMobile } = UseAppContext();
  return (
    <section
      id="about"
      className="d-flex flex-column"
      style={{ minHeight: "100vh", marginTop: "23px" }}
    >
      <div className="d-flex flex-column w-100">
        <Row className="mx-auto w-100">
          <Col sm="1" lg="1" />
          <Col>
            <h3 className="text-start">{t("aboutUs")}</h3>
          </Col>
        </Row>

        <Row className="w-100 my-auto mx-auto">
          <Col sm="1" lg="1" />
          <Col sm="5" className={isMobile ? "text-center pt-3" : "text-start"}>
            <p dangerouslySetInnerHTML={{ __html: t("aboutParagraphOne") }} />
          </Col>
          <Col sm="5" className={"text-start" + (isMobile ? "py-3" : " ")}>
            <p dangerouslySetInnerHTML={{ __html: t("aboutParagraphTwo") }} />
            <p>{t("githubLink")}</p>
          </Col>
          <Col sm="1" />
        </Row>

        <Row className="w-100 mx-auto" style={{ marginTop: "80px" }}>
          <Col sm="1" lg="1" />
          <Col sm="10" className={isMobile ? "text-center pt-3" : "text-start"}>
            <h3>{t("ourTeam")}</h3>
            <p dangerouslySetInnerHTML={{ __html: t("ourTeamInfo") }} />

            <div className="mx-auto w-100">
              <Col sm="6">
                <div className="d-flex">
                  <Image
                    src={matias}
                    alt="Matias profile"
                    style={{ maxWidth: isMobile ? "90vw" : "17vw" }}
                  />
                  <div className="ms-2">
                    <h3 className="text-uppercase mb-0">Matias Leites</h3>
                    <p className="mb-0" style={{ fontSize: "2rem" }}>
                      {t("founder")}
                    </p>
                    <a
                      href="https://www.linkedin.com/in/matiasleites"
                      target="_blank"
                      referrerPolicy="no-referrer"
                    >
                      linkedin.com/in/matiasleites
                    </a>
                    <br />
                    <a href="https://www.matiasleites.com.br" target="_blank">
                      www.matiasleites.com.br
                    </a>
                  </div>
                </div>
              </Col>
              <Col sm="6"> </Col>
            </div>
          </Col>
          <Col sm="1" />
        </Row>
      </div>
    </section>
  );
}
