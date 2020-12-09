const puppeteer = require('puppeteer');
const path = require('path');

(async() => {
	const browser = await puppeteer.launch({executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'});
	const page = await browser.newPage();
	await page.addScriptTag({path: "./classes.js", content: "text/javascript"});
	var v = await page.evaluate(() => {
		var s = new StoryContent(1, 'abc');
		return s;
	});
	console.log(v);
	await page.close();
	await browser.close();
})();