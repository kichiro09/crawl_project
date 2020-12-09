const puppeteer = require('puppeteer');
const mkd = require('mkdirp');
const path = require('path');
const pt = path.resolve('C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe');
const fs = require('fs');
var avt ="/abc";
fs.readFile(avt, '', function(err){if (err) {
	avt = path.join(process.cwd(), avt);
	console.log(avt);
	fs.mkdir(avt,function(err) {if (err) throw err;});
}});
// fs.readFile('test_page_1.JSON', 'utf8', function(err, data) {
// 	if (err) throw err;
// 	var dt = JSON.parse(data);
// 	avt = dt[0].avt;
// 	console.log(avt);
// });
(async() => {
	const browser = await puppeteer.launch({executablePath: pt});
	const page = await browser.newPage();
	var viewSource = await page.goto("https://www.ngonphong.com/wp-content/uploads/2020/08/mehoaclongnguoi2-720x540.jpg");
	fs.writeFile('./images/test.jpg',await viewSource.buffer(), function(err) {
		if (err) throw err;
		console.log('saved');
	})
	// var avt = json[0].avt;
	// var path = avt.replace(/(.*)\/\/(.*)\/(.*)\/(.*)\//,"$4");
	// console.log(avt);
	await page.close();
	await browser.close();
});