import { t } from "i18next";
import { useCallback, useEffect, useState } from "react";
import { AudioType, audioTypes } from "../../types/AudioType";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/src/styles.scss";
import { FaRegCirclePlay } from "react-icons/fa6";
import forest from "../../assets/images/forest-player.webp";
import music from "../../assets/images/music-player.webp";
import ocean from "../../assets/images/ocean-player.webp";
import river from "../../assets/images/river-player.webp";
import forest001 from "../../assets/audios/forest-001.mp3";
import "./videoPlayer.scss";

export default function VideoPlayerPreview() {
  const [type, setType] = useState<AudioType>("ocean");
  const [paused, setPaused] = useState(false);
  const [playing, setPlaying] = useState(false);

  const audioConfig = {
    forest: { image: forest, audio: forest001 },
    river: { image: river, audio: forest001 },
    ocean: { image: ocean, audio: forest001 },
    music: { image: music, audio: forest001 },
  } as const;

  const nextType = useCallback(() => {
    setType((current) => {
      const currentIndex = audioTypes.indexOf(current);
      const nextIndex = (currentIndex + 1) % audioTypes.length;
      return audioTypes[nextIndex];
    });
  }, []);

  const chooseType = useCallback((currentType: AudioType) => {
    setType(currentType);
    setPaused(true);
  }, []);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      nextType();
    }, 3000);

    return () => clearInterval(interval);
  }, [paused, nextType]);

  const selectedBack = audioConfig[type].image;
  const selectedAudio = audioConfig[type].audio;

  return (
    <div
      className="bg-black w-100 d-flex flex-column rounded"
      style={{
        transition: "all 0.3s",
        minHeight: "55vh",
        backgroundImage: `url(${selectedBack})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="mt-1 ms-1 d-flex pointer-purple"
        style={{ position: "absolute" }}
      >
        {audioTypes.map((typeItem) => (
          <div
            className="me-2 px-2"
            onClick={() => chooseType(typeItem)}
            key={`audio-type-btn-${typeItem}`}
          >
            <p
              className="text-uppercase pointer-purple"
              style={{ color: type === typeItem ? "white" : "gray" }}
            >
              {t(`audioTypes.${typeItem}`)}
            </p>
          </div>
        ))}
      </div>

      {!playing && (
        <div className="m-auto pointer-purple w-100">
          <div onClick={() => setPlaying(true)} className="d-flex flex-column">
            <FaRegCirclePlay className="text-center mx-auto " size={56} />

            <p className="text-center text-uppercase">{t("start")}</p>
          </div>
        </div>
      )}

      {playing && (
        <div className="w-100 mb-0 mt-auto">
          <AudioPlayer
            autoPlay
            showJumpControls={false}
            showFilledVolume={true}
            src={selectedAudio}
            onPlay={() => console.log("onPlay")}
          />
        </div>
      )}
    </div>
  );
}
