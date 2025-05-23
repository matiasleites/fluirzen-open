/* eslint-disable @typescript-eslint/no-explicit-any */
import { t } from "i18next";
import { CSSProperties, useCallback, useEffect, useRef, useState } from "react";
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
import "./videoPlayer.scss";
import { FaVolumeUp } from "react-icons/fa";
import { UseAppContext } from "../../context/UseAppContext";
import { storage } from "../../config/firebaseConfig";
import { getBlob, ref } from "firebase/storage";
import localforage from "localforage";
import { Spinner } from "react-bootstrap";

async function getAudioFile(name: string) {
  const starsRef = ref(storage, `audios/${name}.mp3`);
  const blob = await getBlob(starsRef);

  if (blob) {
    localforage.setItem(name, blob);
    return URL.createObjectURL(blob);
  } else {
    return undefined;
  }
}

async function getCachedAudio(name: string) {
  return await localforage.getItem(name).then(async (cachedAudio) => {
    if (cachedAudio) {
      return URL.createObjectURL(cachedAudio as any);
    } else {
      return await getAudioFile(name);
    }
  });
}

export default function VideoPlayer() {
  const [type, setType] = useState<AudioType>("ocean");
  const [paused, setPaused] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentInstruction, setCurrentInstruction] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const audioRef = useRef<HTMLAudioElement>(null);
  const { isMobile, width, height } = UseAppContext();
  const [currentAudio, setCurrentAudio] = useState(undefined as unknown);
  const [loadingAudio, setLoadingAudio] = useState(false);

  const meditationInstructions = [
    t("instructions.001"),
    t("instructions.002"),
    t("instructions.003"),
    t("instructions.004"),
    t("instructions.005"),
  ];

  const audioConfig = {
    forest: { image: forest, audioName: "forest-001" },
    river: { image: river, audioName: "river-001" },
    ocean: { image: ocean, audioName: "ocean-001" },
    music: { image: music, audioName: "music-001" },
    rain: { image: rain, audioName: "rain-001" },
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
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setShowPlayer(true);
        })
        .catch((e) => {
          console.error("Error al reproducir:", e);
        });
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

  async function loadAudio(currentType: AudioType) {
    const audioName = audioConfig[currentType].audioName;
    setLoadingAudio(true);

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    const file = await getCachedAudio(audioName);
    setCurrentAudio(file);
    setLoadingAudio(false);
    setShowPlayer(true);
    setIsPlaying(true);

    if (audioRef.current) {
      audioRef.current.oncanplaythrough = () => {
        audioRef.current
          ?.play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch((e) => {
            setIsPlaying(false);
            console.error("Error al reproducir:", e);
          });
      };
      audioRef.current.load();
    }
  }

  useEffect(() => {
    if (!audioRef.current) return;

    const audio = audioRef.current;
    audio.oncanplaythrough = null;
    audio.oncanplaythrough = () => {
      if (isPlaying) {
        audio.play().catch(console.error);
      }
    };

    return () => {
      audio.oncanplaythrough = null;
    };
  }, [currentAudio, isPlaying]);

  const [playerStyle, setPlayerStyle] = useState({
    transition: "all 0.3s",
    minHeight: isMobile ? "40vh" : "55vh",
    backgroundImage: `url(${selectedBack})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  } as CSSProperties);

  useEffect(() => {
    const tempWidth = width < 1000 ? `${width * 0.9}px` : "960px";
    const tempHeight = width < 1000 ? `${height * 0.9}px` : "644px";

    setPlayerStyle({
      maxWidth: showPlayer ? (isMobile ? "95vw" : tempWidth) : undefined,
      maxHeight: showPlayer ? (isMobile ? "90vh" : tempHeight) : undefined,
      transition: "all 0.3s",
      minHeight: isMobile ? "40vh" : "55vh",
      backgroundImage: `url(${selectedBack})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      height: "100%",
      margin: "auto",
    });
  }, [isMobile, selectedBack, showPlayer, width, height]);

  return (
    <div className={"p-0 m-0 " + (showPlayer ? "player-cover-layout" : "")}>
      <div
        className="bg-black w-100 d-flex flex-column rounded"
        style={playerStyle}
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
                loadAudio(type);
              }}
              className="d-flex flex-column"
            >
              {loadingAudio ? (
                <>
                  <Spinner size="sm" className="text-center mx-auto" />
                  <p className="text-center text-uppercase">
                    {t("loadingAudio")}
                  </p>
                </>
              ) : (
                <>
                  <FaRegCirclePlay className="text-center mx-auto " size={56} />
                  <p className="text-center text-uppercase">{t("start")}</p>
                </>
              )}
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
                  {loadingAudio ? (
                    <Spinner size="sm" className="text-center mx-auto" />
                  ) : isPlaying ? (
                    <FaRegCirclePause
                      className="text-center mx-auto "
                      size={24}
                    />
                  ) : (
                    <FaRegCirclePlay
                      className="text-center mx-auto "
                      size={24}
                    />
                  )}
                </button>

                {!isPlaying && showPlayer && (
                  <button
                    onClick={() => resetProgress()}
                    className="bg-transparent border-0 text-white mt-0"
                  >
                    <FaRegCircleStop
                      className="text-center mx-auto "
                      size={24}
                    />
                  </button>
                )}
              </div>
            </div>
          </>
        )}

        <audio
          ref={audioRef}
          src={currentAudio as any}
          onTimeUpdate={updateProgress}
          onEnded={handleEnded}
        />
      </div>
    </div>
  );
}
