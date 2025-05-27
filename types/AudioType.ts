const audioTypes = ["forest", "river", "ocean", "music", "rain"] as const;
type AudioType = typeof audioTypes[number];

export { audioTypes, type AudioType };