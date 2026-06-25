const sharp = require("sharp");
const fs = require("fs");

fs.mkdirSync("public/images", { recursive: true });

const svg = `<svg width="800" height="800" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#00F5D4"/>
      <stop offset="100%" style="stop-color:#7B61FF"/>
    </linearGradient>
  </defs>
  <rect width="800" height="800" fill="#050816"/>
  <circle cx="400" cy="320" r="140" fill="url(#g)" opacity="0.3"/>
  <circle cx="400" cy="300" r="120" fill="url(#g)"/>
  <text x="400" y="330" font-family="Arial,sans-serif" font-size="72" font-weight="bold" fill="#050816" text-anchor="middle">TH</text>
  <text x="400" y="520" font-family="Arial,sans-serif" font-size="28" fill="#ffffff" text-anchor="middle" opacity="0.8">Tanusha Hande</text>
  <text x="400" y="560" font-family="Arial,sans-serif" font-size="18" fill="#00F5D4" text-anchor="middle">Software Engineer</text>
</svg>`;

sharp(Buffer.from(svg))
  .jpeg({ quality: 90 })
  .toFile("public/images/profile.jpg")
  .then(() => console.log("Created public/images/profile.jpg"))
  .catch(console.error);
