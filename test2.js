const tabs = [
  { Math: ["Electorncs kits", "mechanical kits", "robotic"] },
  { "Science kits": ["Chemistry Kits", "Physics Kits", "Biology Kits"] },
  { "Engineering Kits": ["Geometry Kits", "Measurement Kits", "Symbolic Kits"] },
];


const categoryTab = tabs?.map(tab => Object.keys(tab)).flat()
console.log(categoryTab);