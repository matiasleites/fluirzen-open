import { motion, useInView } from "motion/react";
import { useRef } from "react";
import ContentContainer from "../ContentContainer";
import { useTranslation } from "react-i18next";
import MatiasProfile from "../../assets/images/matias.webp";

export const AboutSection = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const isOnView = useInView(aboutRef, { amount: 0.1 });
  const { t } = useTranslation();
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center min-h-[95vh] py-7 md:py-0"
      style={{ zIndex: 1 }}
      ref={aboutRef}
    >
      <ContentContainer className="px-5 md:px-0 w-full">
        <div className="col-span-0 md:col-span-1" />
        <div className="col-span-12 md:col-span-11">
          <motion.h2
            key={isOnView ? "about-title-visible" : "about-title-hidden"}
            animate={{ opacity: [0, 1], x: [-50, 0] }}
            transition={{ duration: 0.7 }}
            className="uppercase text-center"
          >
            {t("aboutUsTitle")}
          </motion.h2>
          <div className="col-span-12">
            <motion.h3
              key={isOnView ? "about-subtitle-visible" : "about-subtitle-hidden"}
              animate={{ opacity: [0, 1], x: [-50, 0] }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {t("aboutUs")}
            </motion.h3>
          </div>
        </div>
      </ContentContainer>
      <ContentContainer className="px-5 md:px-0 w-full">
        <div className="col-span-0 md:col-span-1" />
        <div className="col-span-12 md:col-span-5">
          <motion.p
            key={isOnView ? "about-text-visible" : "about-text-hidden"}
            animate={{ opacity: [0, 1], x: [-50, 0] }}
            transition={{ duration: 0.7, delay: 0.4 }}
            dangerouslySetInnerHTML={{ __html: t("aboutParagraphOne") }}
          />
        </div>
        <div className="col-span-12 md:col-span-5">
          <motion.p
            key={isOnView ? "about-text-visible" : "about-text-hidden"}
            animate={{ opacity: [0, 1], x: [50, 0] }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-7"
            dangerouslySetInnerHTML={{ __html: t("aboutParagraphTwo") }}
          />

          <motion.div
            animate={{ opacity: [0, 1], x: [50, 0] }}
            transition={{ duration: 0.7, delay: 0.4 }}
            key={isOnView ? "about-github-link-visible" : "about-github-link-hidden"}
          >
            <a href={t("githubLink")} target="_blank" rel="noopener noreferrer" className="text-sm">
              {t("githubLink")}
            </a>
          </motion.div>
        </div>
      </ContentContainer>
      <ContentContainer className="px-5 md:px-0 w-full mt-30">
        <div className="col-span-0 md:col-span-1" />
        <div className="col-span-12 md:col-span-11">
          <motion.h3
            key={isOnView ? "about-team-visible" : "about-team-hidden"}
            animate={{ opacity: [0, 1], x: [-50, 0] }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {t("ourTeam")}
          </motion.h3>
          <motion.p
            key={isOnView ? "about-team-info-visible" : "about-team-info-hidden"}
            animate={{ opacity: [0, 1], x: [-50, 0] }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {t("ourTeamInfo")}
          </motion.p>
        </div>
      </ContentContainer>
      <ContentContainer className="px-5 md:px-0 w-full mt-5 gap-5">
        <div className="col-span-0 md:col-span-1" />
        <div className="col-span-12 md:col-span-5 flex flex-col md:flex-row gap-5">
          <motion.img
            key={isOnView ? "about-matias-profile-visible" : "about-matias-profile-hidden"}
            src={MatiasProfile}
            alt="Matias Profile"
            className="w-full md:w-1/2 rounded"
            animate={{ opacity: [0, 1], x: [-50, 0] }}
            transition={{ duration: 0.7, delay: 0.2 }}
          />
          <div className="w-full md:w-1/2">
            <motion.h3
              key={isOnView ? "about-matias-name-visible" : "about-matias-name-hidden"}
              animate={{ opacity: [0, 1], x: [50, 0] }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="uppercase line-1-2"
            >
              Matias Leites
            </motion.h3>
            <motion.p
              key={isOnView ? "about-matias-founder-visible" : "about-matias-founder-hidden"}
              animate={{ opacity: [0, 1], x: [50, 0] }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              {t("founder")}
            </motion.p>
            <motion.a
              key={isOnView ? "about-matias-link-visible" : "about-matias-link-hidden"}
              animate={{ opacity: [0, 1], x: [50, 0] }}
              transition={{ duration: 0.7, delay: 0.6 }}
              href="https://www.matiasleites.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm"
            >
              www.matiasleites.com.br
            </motion.a>
            <br />
            <motion.a
              key={isOnView ? "about-matias-linkedin-visible" : "about-matias-linkedin-hidden"}
              animate={{ opacity: [0, 1], x: [50, 0] }}
              transition={{ duration: 0.7, delay: 0.7 }}
              href="https://www.linkedin.com/in/matiasleites"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm"
            >
              linkedin.com/in/matiasleites
            </motion.a>
            <br />
            <motion.a
              key={isOnView ? "about-matias-github-visible" : "about-matias-github-hidden"}
              animate={{ opacity: [0, 1], x: [50, 0] }}
              transition={{ duration: 0.7, delay: 0.8 }}
              href="https://www.linkedin.com/in/matiasleites"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm"
            >
              github.com/matiasleites/
            </motion.a>
          </div>
        </div>
        <div className="col-span-12 md:col-span-5"></div>
      </ContentContainer>
    </section>
  );
};
