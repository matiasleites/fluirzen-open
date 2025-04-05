import { t } from "i18next";
import { useCallback, useEffect, useRef, useState } from "react";
import { AudioType, audioTypes } from "../../types/AudioType";
import {
  FaHeadphonesSimple,
  FaRegCirclePause,
  FaRegCirclePlay,
  FaRegCircleStop,
} from "react-icons/fa6";
import forest from "../../assets/images/forest-player.webp";
import music from "../../assets/images/music-player.webp";
import ocean from "../../assets/images/ocean-player.webp";
import river from "../../assets/images/river-player.webp";
import rain from "../../assets/images/rain-player.webp";
import forest001 from "../../assets/audios/forest-001.mp3";
import ocean001 from "../../assets/audios/ocean-001.mp3";
import river001 from "../../assets/audios/river-001.mp3";
import music001 from "../../assets/audios/music-001.mp3";
import rain001 from "../../assets/audios/rain-001.mp3";
import "./videoPlayer.scss";
import { FaVolumeUp } from "react-icons/fa";
import { UseAppContext } from "../../context/AppContext";

export default function VideoPlayerPreview() {
  const [type, setType] = useState<AudioType>("ocean");
  const [paused, setPaused] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentInstruction, setCurrentInstruction] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const audioRef = useRef<HTMLAudioElement>(null);
  const { isMobile } = UseAppContext();

  const meditationInstructions = [
    t("instructions.001"),
    t("instructions.002"),
    t("instructions.003"),
    t("instructions.004"),
    t("instructions.005"),
  ];

  const audioConfig = {
    forest: { image: forest, audio: forest001 },
    river: { image: river, audio: river001 },
    ocean: { image: ocean, audio: ocean001 },
    music: { image: music, audio: music001 },
    rain: { image: rain, audio: rain001 },
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
    if (paused || isPlaying || showPlayer) return;

    const interval = setInterval(() => {
      nextType();
    }, 3000);

    return () => clearInterval(interval);
  }, [paused, isPlaying, showPlayer, nextType]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
        setShowPlayer(true);
      }
      setIsPlaying(!isPlaying);
    }
  };

  const updateProgress = () => {
    if (audioRef.current) {
      const { currentTime, duration } = audioRef.current;
      setProgress((currentTime / duration) * 100 || 0);
    }
  };

  const resetProgress = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setCurrentInstruction(0);
      setProgress(0);
    }
    setShowPlayer(false);
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(0);
  };

  useEffect(() => {
    if (!isPlaying) {
      setCurrentInstruction(0);
      return;
    }

    const interval = setInterval(() => {
      setCurrentInstruction((prev) =>
        prev < meditationInstructions.length - 1 ? prev + 1 : prev
      );
    }, 6000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying]);

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectedBack = audioConfig[type].image;

  return (
    <div
      className="bg-black w-100 d-flex flex-column rounded"
      style={{
        transition: "all 0.3s",
        minHeight: isMobile ? "40vh" : "55vh",
        backgroundImage: `url(${selectedBack})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {!showPlayer && (
        <div
          className="mt-0 pt-1 ms-1 d-flex flex-wrap pointer-purple"
          style={{
            position: "relative",
            backgroundColor: "rgba(0,0,0,0.3)",
          }}
        >
          {audioTypes.map((typeItem) => (
            <div
              className="me-2 px-2"
              onClick={() => chooseType(typeItem)}
              key={`audio-type-btn-${typeItem}`}
            >
              <p
                className="text-uppercase pointer-purple mb-0"
                style={{ color: type === typeItem ? "white" : "gray" }}
              >
                {t(`audioTypes.${typeItem}`)}
              </p>
            </div>
          ))}
        </div>
      )}

      {!showPlayer && (
        <div className="m-auto pointer-purple w-100">
          <div
            onClick={() => {
              setShowPlayer(true);
              togglePlay();
            }}
            className="d-flex flex-column"
          >
            <FaRegCirclePlay className="text-center mx-auto " size={56} />

            <p className="text-center text-uppercase">{t("start")}</p>
          </div>
        </div>
      )}

      {showPlayer && (
        <>
          <div
            className="w-100 mt-4 mb-0 d-flex pointer-purple"
            style={{ position: "relative" }}
          >
            <FaHeadphonesSimple color="white" size={30} className="mx-auto" />
          </div>

          <div
            className="w-100 m-auto px-4"
            style={{ marginTop: "-15px!important" }}
          >
            <div className="mb-0 mx-auto" style={{ minHeight: "3rem" }}>
              <h2
                key={currentInstruction}
                className="fade-in text-center text-shadow-heavy"
              >
                {meditationInstructions[currentInstruction]}
              </h2>
            </div>
          </div>

          <div className="d-flex flex-column mb-3 w-100 px-5 mt-0">
            <div
              className="w-100 rounded"
              style={{ height: "5px", backgroundColor: "#838383" }}
            >
              <div
                className="bg-white rounded"
                style={{
                  width: `${progress}%`,
                  transition: "width 0.1s linear",
                  height: "5px",
                }}
              />
            </div>

            <div
              className="d-flex me-0 ms-auto mb-0 mt-4"
              style={{ width: "100px", position: "absolute" }}
            >
              <FaVolumeUp className="text-white my-auto" />
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="w-100 my-auto ms-1"
                style={{
                  accentColor: "white",
                  background: "gray",
                  cursor: "pointer",
                }}
              />
            </div>

            <div className="mx-auto d-flex pt-3">
              <button
                onClick={togglePlay}
                className="bg-transparent border-0 text-white mt-0"
              >
                {isPlaying ? (
                  <FaRegCirclePause
                    className="text-center mx-auto "
                    size={24}
                  />
                ) : (
                  <FaRegCirclePlay className="text-center mx-auto " size={24} />
                )}
              </button>

              {!isPlaying && showPlayer && (
                <button
                  onClick={() => resetProgress()}
                  className="bg-transparent border-0 text-white mt-0"
                >
                  <FaRegCircleStop className="text-center mx-auto " size={24} />
                </button>
              )}
            </div>
          </div>
        </>
      )}

      <audio
        ref={audioRef}
        src={audioConfig[type].audio}
        onTimeUpdate={updateProgress}
        onEnded={handleEnded}
      />
    </div>
  );
}
