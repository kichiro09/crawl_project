const mysql = require('mysql');
const puppeteer = require('puppeteer');
const path = require('path');
const pt = path.resolve('C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe');
const fs = require('fs');
const conn = mysql.createPool({
  database: 'test',
  host: "localhost",
  user: "root",
  password: ""
});
 
// conn.connect(function(err) {
//   	if (err) throw err;
//   	console.log("Connected!");
// });

var createStoryTableSQL = "create table if not exists story ("
					+"id int not null auto_increment,"
					+"avt varchar(100) null,"
					+"name varchar(100) not null unique,"					
					+" title varchar(100) not null unique,"
					+" chap_count smallint not null default 0,"
					+" updated varchar(50) not null default '1 giờ',"
					+" rate_count mediumint not null default 0,"
					+" primary key (id)) engine=innodb default charset=utf8;";
conn.query(createStoryTableSQL, function(err, ret){
	if (err) throw err;
	console.log("Created table story");
}); 

var createStoryDetailSQL = "create table if not exists story_detail ("
					+"story_id int not null unique,"
					+"dif_name varchar(50) not null,"
					+"author varchar(50) not null,"
					+"sub_team varchar(50) not null,"
					+"status varchar(50) not null,"
					+"created varchar(50) not null default '1970-01-01',"
					+"view varchar(20) not null default '0',"
					+"category varchar(50) not null)"
					+" engine=innodb default charset=utf8;";
conn.query(createStoryDetailSQL, function(err) {
	if (err) throw err;
	console.log("created story detail");
});

var createChapterContentSQL = "create table if not exists chapter_content ("
					+"chap_name varchar(30) not null,"
					+"story_id int not null,"
					+"image_path varchar(50) not null unique"
					+")"
					+" engine=innodb default charset=utf8;";
conn.query(createChapterContentSQL, function(err) {
	if (err) throw err;
	console.log('created chapter content');
});				
(async() => {
	// {executablePath: pt}
<<<<<<< HEAD
	const browser = await puppeteer.launch({executablePath: pt});
=======
	const browser = await puppeteer.launch();
>>>>>>> dd7842fe964b5e988bb51826e4c827854f94a63d
	const page = await browser.newPage();
	await page.setDefaultNavigationTimeout(0); 
	await page.goto('https://www.ngonphong.com/');
	// await page.waitForSelector('img');
	console.log('go done');
	let pageCount = 0;
	pageCount = await page.evaluate(() => {
		return document.getElementsByClassName('pager-note')[0].innerText.match(/([0-9]+)/gi)[1];
	});
	var counter = 0;
	for (var i = 0; i < 1; i++) {
		if (i != 0) {
			await page.goto('https://www.ngonphong.com/page/'+(i + 1) +'/');
		}
		await page.addScriptTag({path: "./classes.js", content: "text/javascript"});
		var tList = await page.evaluate(() => {
			var stories = document.querySelectorAll('.comic-item');
			var objList = [];
			for (var j = 0; j < 10; j++) {
			    var avt = stories[j].querySelectorAll('.comic-img>a>img')[0].src;
			    var link = stories[j].querySelectorAll('.comic-title-link>a')[0].href;
			    var title = stories[j].querySelectorAll('.comic-title-link>a')[0].title;
			    var chapCount = stories[j].querySelectorAll('.comic-title-link>a')[1].innerText;
			    var dateUpdate = stories[j].querySelectorAll('.comic-title-link>span')[0].innerText;
				var rate = stories[j].querySelectorAll('.comic-title-link>p>span.blue')[0].innerText;
				var rateCount = stories[j].querySelectorAll('.comic-title-link>p>span.cat-vote.round-vote')[0].innerText;
				var avt_link = '';
				if (avt.startsWith('https://')) {
					avt_link = avt;
				} else {
					avt_link = stories[j].querySelectorAll('.comic-img>a>img')[0].attributes['data-gra'].value;
				}
				var story = new Story(avt_link, link, title, chapCount, dateUpdate, rate, rateCount);
			    objList.push(story);
			}
			return objList;
		});
		for (var i2 = 0; i2 < 10; i2++) {
			var t = tList[i2];
			var name = t.link.match(/([^\/]+)/gi)[3];
			var imgPath = path.join(process.cwd(), '/images/'+name);
			if (!fs.existsSync(imgPath)) {
				console.log('path not exists');
				fs.mkdir(imgPath, err => {if (err) throw err;});
				console.log('path created');
			}
			var view = await page.goto(t.avt);
			await page.setDefaultNavigationTimeout(0); 
			console.log('go done %s', t.avt);			
			if (!fs.existsSync(imgPath+'/'+name+'_avt.jpg')) {
				fs.writeFile(imgPath+'/'+name+'_avt.jpg', await view.buffer(), function(err) {if (err) throw err;});
				console.log('write file');
			}
			var sqlSelect = "select * from story where name ='"+name+"'";
			console.log('sqlSelect: %s', sqlSelect);
<<<<<<< HEAD
			var storyID = 0;
			await conn.query(sqlSelect,async function(err, ret, fields) {
				if (err) {
					console.log('select story failed %s', err);
				}
				if (ret.length === 0) {
					var sqlInsert = 'insert into story (avt, name, title, chap_count, updated, rate_count) values('
								+"'/"+name+'_avt.jpg'+"','"+name+"','"+
								t.title+"',"+t.chapCount.match(/[0-9]+/)+",'"+t.updated+"',"+t.rateCount
								+');';
					await conn.query(sqlInsert, function(err, ret, fields) {
						if (err) throw err;
						console.log('insert story done! '+ret.insertId);
						storyID = ret.insertId;
					});
				} else {
					storyID = ret[0].id;
					console.log('story %s exists', name);
				}
			});
=======
			var checkB = await conn.query(sqlSelect, function(err, ret, fields) {
				if (err) {
					console.log('select story failed %s', err);
				}
				if (typeof ret[0] !== 'undefined') return -1;
				return 1;
			});
			console.log('checkb value ' + checkB);
			var storyID = 0;
			if (checkB) {
				var sqlInsert = 'insert into story (avt, name, title, chap_count, updated, rate_count) values('
							+"'/"+name+'_avt.jpg'+"','"+name+"','"+
							t.title+"',"+t.chapCount.match(/[0-9]+/)+",'"+t.updated+"',"+t.rateCount
							+');';
				await conn.query(sqlInsert, function(err, ret, fields) {
					if (err) throw err;
					console.log('insert story done! '+ret.insertId);
					storyID = ret.insertId;
				});
			} else {
				console.log('story %s exists', name);
			}
>>>>>>> dd7842fe964b5e988bb51826e4c827854f94a63d
			
			console.log('get story done %s',storyID);
			console.log('go to %s link',t.link);
			await page.goto(t.link);
			console.log('go to %s done', t.link);
			await page.addScriptTag({path: "./classes.js", content: "text/javascript"});
			var storyDetail = await page.evaluate(() => {
				var difName = document.querySelectorAll('.comic-info>p>span')[0].innerText;
				var author = document.querySelectorAll('.comic-info>p>span')[1].innerText;
				var subTeam = document.querySelectorAll('.comic-info>p>a')[0].innerText;
				var status = document.querySelectorAll('.comic-info>p>span')[2].innerText;
				var created = document.querySelectorAll('.comic-info>p')[0].childNodes[26].textContent;
				var view = document.querySelectorAll('.comic-info>p>span')[3].innerText;
				var category = '';
				document.querySelectorAll('.comic-info>div')[1].querySelectorAll('a').forEach(e =>{category += (e.innerText) + "-";});
				var chapList = [];
				document.querySelectorAll('.text-capitalize').forEach(e=>{if (e.href) chapList.push(e.href);});
				var storyDetail = new StoryDetail(difName, author, subTeam, status, created, view, category, chapList);
				return storyDetail;
			});
			var checkInsertStoryDetail = 'select * from story_detail where story_id = ' + storyID;
<<<<<<< HEAD
			await conn.query(checkInsertStoryDetail,async function(err, ret) {
				if (err) console('check story detail failed, %d\n%s', storyID, err);
				if (ret.length === 0) {
					var insertStoryDetail = 'insert into story_detail values ('
									+storyID+",'"+storyDetail.difName+"','"+storyDetail.author+"','"+storyDetail.subTeam+"','"+storyDetail.status+"','"+storyDetail.created+"','"+storyDetail.view+"','"+storyDetail.category+"');";
					await conn.query(insertStoryDetail, err => {if (err) throw err;});
					console.log('insert storyDetail done');
				} else {
					console.log('story detail %d exists', storyID);
				}
			})
			
=======
			var checkStoryDetailB = true;
			await conn.query(checkInsertStoryDetail, function(err, ret) {
				if (err) console('check story detail failed, %d\n%s', storyID, err);
				if (typeof ret[0] !== 'undefined') checkStoryDetailB = false;
			})
			if (checkStoryDetailB) {
				var insertStoryDetail = 'insert into story_detail values ('
								+storyID+",'"+storyDetail.difName+"','"+storyDetail.author+"','"+storyDetail.subTeam+"','"+storyDetail.status+"','"+storyDetail.created+"','"+storyDetail.view+"','"+storyDetail.category+"');";
				await conn.query(insertStoryDetail, err => {if (err) throw err;});
				console.log('insert storyDetail done');
			}
>>>>>>> dd7842fe964b5e988bb51826e4c827854f94a63d
			for (var chapI = 0; chapI < 5; chapI ++) {
				var imgLink = storyDetail.chapList[chapI]
				await page.goto(imgLink);
				await page.waitForSelector('img');
				console.log('go to %s done', imgLink);
				var imgList = await page.evaluate(() => {
					var imgAr = [];
					document.querySelectorAll('#view-chapter>img').forEach(e => {
						var srcTemp = e.src.startsWith('https') ? e.src : typeof e.attributes['data-gra'] !== 'undefined' ? e.attributes['data-gra'].value : '';
						if (srcTemp !== '')
							imgAr.push(srcTemp);
					});
					return imgAr;
				});
				var chapName = imgLink.match(/chap-[^\/]+/gi)[0];
				for (var imgI = 0; imgI < imgList.length; imgI++) {
					console.log('start go to %s', imgList[imgI]);
					var viewImg = await page.goto(imgList[imgI]);
					await page.waitForSelector('img');
					console.log('go to %s done', imgList[imgI]);
					if (!fs.existsSync(imgPath+'/'+chapName+imgI+".jpg")) {
						fs.writeFile(imgPath+'/'+chapName+imgI+".jpg", await viewImg.buffer(), function(err) {if (err) throw err;});
						console.log('write file %s_%s',chapName,imgI);
						await page.addScriptTag({path: "./classes.js", content: "text/javascript"});
						var imagePath = chapName + imgI + ".jpg";
						var selectChapContent = "select * from chapter_content where story_id=" + storyID +" and image_path='" + imagePath + "'";
<<<<<<< HEAD
						
						await conn.query(selectChapContent,async function(err, ret) {
							if (err) console('select chapter_content failed image_path: %s\n%s', imagePath, err);
							if (ret.length === 0) {
								var insertChapContent = 'insert into chapter_content values('+"'"+chapName+"',"+storyID+",'"
													+imagePath+".jpg');";
								await conn.query(insertChapContent, err=> {if (err) throw err;});
								console.log("inserted chap content");
							} else {
								console.log('image_path exists, story_id %d, image_path %s',storyID, imagePath);
							}
						});
						
=======
						var checkInsertChapContentB = true;
						await conn.query(selectChapContent, function(err, ret) {
							if (err) console('select chapter_content failed image_path: %s\n%s', imagePath, err);
						});
						if (checkInsertChapContentB) {
							var insertChapContent = 'insert into chapter_content values('+"'"+chapName+"',"+storyID+",'"
												+imagePath+".jpg');";
							await conn.query(insertChapContent, err=> {if (err) throw err;});
							console.log("inserted chap content");
						}
>>>>>>> dd7842fe964b5e988bb51826e4c827854f94a63d
					}
				}
			}
		}
	}
	await browser.close();
	conn.end();
})();