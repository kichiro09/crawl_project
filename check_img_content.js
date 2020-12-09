const puppeteer = require('puppeteer');
const path = require('path');
const pt = path.resolve('C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe');

(async() => {
	console.log("start async");
	const browser = await puppeteer.launch({executablePath: pt});
	const page = await browser.newPage();
	console.log("start go");
	var d = new Date();
	var start = d.getTime();
	await page.goto('https://www.ngonphong.com/');
	console.log("go done %s", ((new Date()).getTime() - start));
	var pageCount = await page.evaluate(() => {
		return document.getElementsByClassName('pager-note')[0].innerText.match(/([0-9]+)/gi)[1];
	});
	console.log("pageCount %d", pageCount);
	for (var i = 0; i < 1; i++) {
		if (i != 0) {
			var linkGo = 'https://www.ngonphong.com/page/'+(i + 1) +'/';
			await page.goto(linkGo);
			console.log("going to page %s", linkGo);
		}
		var stories = await page.$$('.comic-item');
		console.log("comic count %d", stories.length);
		for (var j = 0; j < stories.length; j++) {

			var link = await page.evaluate((j) => {
				return document.querySelectorAll('.comic-item')[j].querySelectorAll('.comic-title-link>a')[0].href;
			}, j); 
			var pageT = await browser.newPage();
			await pageT.setDefaultNavigationTimeout(0); 
			await pageT.goto(link);
			var listPage = await pageT.evaluate(() => {
				var textL = document.querySelectorAll('.text-capitalize');
				var listT = [];
				textL.forEach(e => {if (typeof(e.href) !== 'undefined') listT.push(e.href);});
				return listT;
			});
			console.log("link: "+link+"\nlistpage: "+listPage.length);
			for (var k = 0; k < listPage.length; k++) {
				console.log("go to %s",listPage[k]);
				await pageT.goto(listPage[k]);
				console.log('time %s', ((new Date()).getTime() -start));
				var isImg = await pageT.evaluate(() => {
					var imgT = document.querySelectorAll('#view-chapter')[0].childNodes;
					imgT.forEach(e => {if (e.tagName !== 'IMG') return false;});
					return true;
				});
				if (!isImg) {
					console.log('not img');
					return;
				}
			}
			console.log("check link done: "+link);
			await pageT.close();
		}
		console.log("check pageCount %d done", (i+1));
	}
	console.log("check all story done !");
	await page.close();
	await browser.close();
})();