const fs = require("fs");
const path = require("path");

function generateRobots() {
  const robotsContent = `
       User-agent: *
       Disallow: /


Sitemap: https://kepler-teal.vercel.app/en/sitemap.xml
Sitemap: https://kepler-teal.vercel.app/de/sitemap.xml
    `;

  fs.writeFileSync(path.resolve("./public/robots.txt"), robotsContent);
}

generateRobots();

