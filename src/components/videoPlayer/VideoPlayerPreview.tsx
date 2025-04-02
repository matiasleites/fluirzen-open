import { t } from "i18next";
import { useState } from "react";
import { AudioType, audioTypes } from "../../types/AudioType";
import { FaRegCirclePlay } from "react-icons/fa6";
import forest from "../../assets/images/forest-player.webp";
import music from "../../assets/images/music-player.webp";
import ocean from "../../assets/images/ocean-player.webp";
import river from "../../assets/images/river-player.webp";

export default function VideoPlayerPreview() {
  const [type, setType] = useState<AudioType>("forest");

  const audioConfig = {
    forest: {
      image: forest,
    },
    river: {
      image: river,
    },
    ocean: {
      image: ocean,
    },
    music: {
      image: music,
    },
  } as const;

  function chooseType(currentType: AudioType) {
    setType(currentType);
  }

  const selectedBack = audioConfig[type].image;

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
    >
      <div
        className="mt-1 ms-1 d-flex pointer-purple"
        style={{ position: "absolute" }}
      >
        {audioTypes.map((typeItem) => (
          <div className="me-2 px-2" onClick={() => chooseType(typeItem)}>
            <p
              className="text-uppercase pointer-purple"
              style={{ color: type === typeItem ? "white" : "gray" }}
            >
              {t(`audioTypes.${typeItem}`)}
            </p>
          </div>
        ))}
      </div>

      <div className="m-auto d-flex flex-column pointer-purple">
        <FaRegCirclePlay className="text-center mx-auto " size={56} />
        <p className="text-center text-uppercase">{t("start")}</p>
      </div>
    </div>
  );
}
