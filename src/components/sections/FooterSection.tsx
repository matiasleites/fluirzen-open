import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { UseAppContext } from "../../context/AppContext";

export default function FooterSection() {
  const { t } = useTranslation();
  const { isMobile } = UseAppContext();
  return (
    <section
      id="about"
      className="d-flex flex-column"
      style={{ minHeight: "90vh", marginTop: "23px" }}
    >
      <div className="d-flex flex-column w-100">
        <Row className="mx-auto w-100">
          <Col sm="1" lg="1" />
          <Col>
            <h3 className="text-start">{t("freeLibrariesInfo")}</h3>
          </Col>
        </Row>

        <Row className="w-100 my-auto mx-auto">
          <Col sm="1" lg="1" />
          <Col sm="5" className={isMobile ? "text-center pt-3" : "text-start"}>
            <a
              href="https://react.dev/"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              ReactJs
            </a>
            <br></br>
            <a
              href="https://react-bootstrap.netlify.app/"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              React Bootstrap
            </a>
            <br></br>
            <a
              href="https://unsplash.com/"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              Unsplash.com
            </a>
            <br></br>
            <a
              href="https://freesound.org/"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              FreeSound.org
            </a>
            <br></br>

            <a
              href=" https://pixabay.com/"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              Pixabay.com
            </a>
          </Col>
          <Col
            sm="5"
            className={"text-start" + (isMobile ? "py-3" : " ")}
          ></Col>
          <Col sm="1" />
        </Row>
      </div>{" "}
      <p className="mb-3 mt-auto text-center">
        Fluirzer © {new Date().toLocaleDateString("es-ES", { year: "numeric" })}{" "}
        |{" "}
        <a href="https://www.matiasleites.com.br" target="_blank">
          Matias Leites
        </a>
      </p>
    </section>
  );
}
