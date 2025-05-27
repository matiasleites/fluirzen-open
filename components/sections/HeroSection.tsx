import { useTranslation } from "react-i18next";
import ContentContainer from "../ContentContainer";
import VideoPlayer from "../videoPlayer/VideoPlayer";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import LanguageSelect from "../LanguageSelect";

export function HeroSection() {
  const { t } = useTranslation();
  const heroRef = useRef<HTMLDivElement>(null);
  const isOnView = useInView(heroRef);

  return (
    <section id="hero" className="flex flex-col items-center justify-center min-h-[95vh] py-7 md:py-0" ref={heroRef}>
      <LanguageSelect className="absolute mx-auto mt-0 top-6 md:top-4" />
      <ContentContainer className="px-5 md:px-0 w-full pt-6 md:pt-0">
        <div className="col-span-0 md:col-span-1" />
        <div className="col-span-12 md:col-span-6">
          <motion.h1
            key={isOnView ? "title-visible" : "title-hidden"}
            animate={{ opacity: [0, 1], x: [-50, 0] }}
            transition={{ duration: 0.7 }}
            className="uppercase"
          >
            {t("appName")}
          </motion.h1>
        </div>
      </ContentContainer>
      <ContentContainer className="px-5 md:px-0">
        <div className="col-span-0 md:col-span-1" />
        <div className="col-span-12 md:col-span-6">
          <motion.div
            key={isOnView ? "video-visible" : "video-hidden"}
            animate={{ opacity: [0.5, 1], x: [-50, 0] }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <VideoPlayer />
          </motion.div>
        </div>
        <div className="col-span-12 md:col-span-4">
          <motion.h2
            key={isOnView ? "subtitle-visible" : "subtitle-hidden"}
            animate={{ opacity: [0, 1], x: [50, 0] }}
            transition={{ duration: 0.7, delay: 0 }}
            className="uppercase line-1-2"
          >
            {t("appSlogan")}
          </motion.h2>
          <motion.p
            key={isOnView ? "text-visible" : "text-hidden"}
            animate={{ opacity: [0, 1], x: [50, 0] }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className=""
            dangerouslySetInnerHTML={{ __html: t("heroText") }}
          />
        </div>
      </ContentContainer>
    </section>
  );
}
