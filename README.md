NODE version: 20.9.0

How to use: npm install && npm run dev

Live demo: https://fluirzen.com

You need a firebase account to test, needs a .env file with the secrets of the proyect (see .env.example for the structure).

The audio files have to be inside the firebase storage on folder /audios/ and update the file src/components/videoPlayer /VideoPlayer.tsx for link to the real file names on the const audioConfig, you have to change only audioName:

const audioConfig = { forest: { image: forest, audioName: "forest-001" }, river: { image: river, audioName: "river-001" }, ocean: { image: ocean, audioName: "ocean-001" }, music: { image: music, audioName: "music-001" }, rain: { image: rain, audioName: "rain-001" }, } as const;

Example if, you store one file my-audio.mp3 on firebase storage you have to update the name in this way forest:{ image: forest, audioName: 'my-audio'}

Code owner: matiasleites https://matiasleites.com.br