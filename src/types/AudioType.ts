const audioTypes = ["forest", "river", "ocean", "music"] as const;
type AudioType = typeof audioTypes[number];

export { audioTypes, type AudioType };