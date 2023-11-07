const fs = require("fs");
const path = require("path");

const mediaDirectory = path.join(__dirname, "public/extracted/memories");

const imageUrls = fs.readdirSync(mediaDirectory).map((fileName) => {
  return `/extracted/memories/${fileName}`;
});

fs.writeFileSync("memoryUrls.json", JSON.stringify(imageUrls));
