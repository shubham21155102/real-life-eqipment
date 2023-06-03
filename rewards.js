const puppeteer = require('puppeteer');
function generateRandomWord(length) {
  const characters = 'abcdefghijklmnopqrstuvwxyz';
  let randomWord = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomWord += characters[randomIndex];
  }

  return randomWord;
}
(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    userDataDir: '/home/shubham/pupp',
    executablePath: '/usr/bin/google-chrome',
    defaultViewport: null,
    args: ["--start-maximized"],
  });
  const page = await browser.newPage();
 for(let i=0;i<30;i++){
    await page.goto(`https://www.bing.com/search?q=${generateRandomWord(8)}`);
  }
 // //chat gpt opening
  // await page.goto("https://chat.openai.com/c/1e98f1ed-ad93-4409-8ff9-e8a4b531ef6f");
await browser.close();
})();
