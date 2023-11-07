const fs = require("fs");
const path = require("path");

const mediaDirectory = path.join(__dirname, "public/extracted/chat_media");

const imageUrls = fs.readdirSync(mediaDirectory).map((fileName) => {
  return `/extracted/chat_media/${fileName}`;
});

fs.writeFileSync("mediaUrls.json", JSON.stringify(imageUrls));
