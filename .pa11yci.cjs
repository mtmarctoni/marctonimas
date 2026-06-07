const urls = [
  "http://localhost:4321/",
  "http://localhost:4321/background",
  "http://localhost:4321/es/",
  "http://localhost:4321/es/background",
];

module.exports = {
  defaults: {
    timeout: 30000,
    chromeLaunchConfig: {
      executablePath: process.env.CHROME_PATH || undefined,
      args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
    },
  },
  urls,
};