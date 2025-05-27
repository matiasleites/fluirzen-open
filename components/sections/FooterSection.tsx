import { useTranslation } from "react-i18next";
import ContentContainer from "../ContentContainer";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

export const FooterSection = () => {
  const { t } = useTranslation();
  const footerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(footerRef);

  return (
    <section
      id="footer"
      className="flex flex-col items-center justify-center min-h-[95vh] py-7 md:py-0"
      ref={footerRef}
    >
      <ContentContainer className="px-5 md:px-0 w-full">
        <div className="col-span-0 md:col-span-1" />
        <div className="col-span-12 md:col-span-11">
          <motion.h3
            key={inView ? "footer-title-visible" : "footer-title-hidden"}
            animate={{ opacity: [0, 1], x: [-50, 0] }}
            transition={{ duration: 0.7 }}
          >
            {t("freeLibrariesInfo")}
          </motion.h3>

          <motion.div
            key={inView ? "footer-vike-visible" : "footer-vike-hidden"}
            animate={{ opacity: [0, 1], x: [-50, 0] }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <a href="https://vike.dev/" target="_blank" referrerPolicy="no-referrer" rel="noreferrer">
              Vike
            </a>
          </motion.div>

          <motion.div
            key={inView ? "footer-react-visible" : "footer-react-hidden"}
            animate={{ opacity: [0, 1], x: [-50, 0] }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <a href="https://react.dev/" target="_blank" referrerPolicy="no-referrer" rel="noreferrer">
              React
            </a>
          </motion.div>

          <motion.div
            key={inView ? "footer-tailwind-visible" : "footer-tailwind-hidden"}
            animate={{ opacity: [0, 1], x: [-50, 0] }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <a href="https://tailwindcss.com/" target="_blank" referrerPolicy="no-referrer" rel="noreferrer">
              Tailwind CSS
            </a>
          </motion.div>

          <motion.div
            key={inView ? "footer-unsplash-visible" : "footer-unsplash-hidden"}
            animate={{ opacity: [0, 1], x: [-50, 0] }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <a href="https://unsplash.com/" target="_blank" referrerPolicy="no-referrer" rel="noreferrer">
              Unsplash.com
            </a>
          </motion.div>

          <motion.div
            key={inView ? "footer-freesound-visible" : "footer-freesound-hidden"}
            animate={{ opacity: [0, 1], x: [-50, 0] }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <a href="https://freesound.org/" target="_blank" referrerPolicy="no-referrer" rel="noreferrer">
              FreeSound.org
            </a>
          </motion.div>

          <motion.div
            key={inView ? "footer-pixabay-visible" : "footer-pixabay-hidden"}
            animate={{ opacity: [0, 1], x: [-50, 0] }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            <a href=" https://pixabay.com/" target="_blank" referrerPolicy="no-referrer" rel="noreferrer">
              Pixabay.com
            </a>
          </motion.div>
        </div>
      </ContentContainer>
      <p className="mb-8 mt-auto text-center">
        Fluirzen © {new Date().toLocaleDateString("es-ES", { year: "numeric" })} |{" "}
        <a href="https://www.matiasleites.com.br" target="_blank" rel="noreferrer">
          Matias Leites
        </a>
      </p>
    </section>
  );
};
