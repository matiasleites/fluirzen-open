NODE version: 20.9.0

How to use:
npm install
npm run dev

You need a firebase account to test, nees a .env file with the secrets of the proyect (see .env.example for the structure).

The audio files have to be inside the firebase storage on folder /audios/ an dupdate the src/components/videoPlayer
/VideoPlayer.tsx for link to the real file names on the const audioConfig:  

const audioConfig = {
    forest: { image: forest, audioName: "forest-001" },
    river: { image: river, audioName: "river-001" },
    ocean: { image: ocean, audioName: "ocean-001" },
    music: { image: music, audioName: "music-001" },
    rain: { image: rain, audioName: "rain-001" },
  } as const;
