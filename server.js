const StoryDB = require("./classes.js").StoryDB;
const StoryDetailDB = require("./classes.js").StoryDetailDB; 
const ChapterContent = require("./classes.js").ChapterContent;
var db_cofig = {
  database: 'heroku_5c8bd5fb6c59985',
  host: "us-cdbr-east-02.cleardb.com",
  user: "b612853c3fb74b",
  password: "838ac40a"
}
// import {StoryDetail} from "./classes.js";
// import {StoryContent} from "./classes.js";
var express = require('express');
var app = express();
var mysql = require('mysql');
var conn = mysql.createPool(db_cofig);
// conn.connect(function(err) {
// 	if (err) throw err;
// 	console.log('connected');
// });

app.use(express.static('images'));

app.post('/', function(req, res) {
	res.send('Hello World');
});

app.post('/get_all_story', function (req, res) {
   var sql = "select * from story";
   conn.query(sql, function(err, ret, fields) {
   		if (err) throw err;
   		if (typeof ret[0] !== 'undefined') {
	   		var objList = [];
	   		ret.forEach(e => {
	   			objList.push(new StoryDB(e.id,e.avt,e.name,e.title,e.chap_count,e.updated,e.rate_count));
	   		});
	   		res.send(JSON.stringify(objList));
   		} else {
   			res.send('null');
   		}
   });
});

app.post('/get_story_detail', function (req, res) {
   var id = req.query.story_id;
   if (typeof id !== 'undefined') {
	   var sql = "select * from story_detail where story_id="+id;
	   conn.query(sql, function(err, ret) {
	   		if (err) throw err;
	   		if (typeof ret[0] !== 'undefined') {
		   		var storyDetail = new StoryDetailDB(ret[0].story_id,ret[0].dif_name,ret[0].author,ret[0].sub_team,ret[0].status,ret[0].created,ret[0].view,ret[0].category);
		   		res.send(JSON.stringify(storyDetail));
	   		} else {
	   			res.send('null');
	   		}
	   });
   } else {
   		res.send('invalid param');
   }
});

app.post('/get_chapter', function (req, res) {
	var story_id = req.query.story_id;
	if (typeof story_id !== 'undefined') {
		var sql = "select distinct chap_name from chapter_content where story_id =" + story_id;
		conn.query(sql, function(err, ret) {
			if (err) throw err;
			if (typeof ret[0] !== 'undefined') {
				var objList = [];
				ret.forEach(e => {
					objList.push({'chap_name': e.chap_name});
				});
				res.send(JSON.stringify(objList));
			} else {
				res.send('null');
			}
		});
	} else {
		res.send('invalid param');
	}

});

app.post('/get_chapter_images', function(req, res) {
	var chap = req.query.chap;
	var story_id = req.query.story_id;
	if (typeof chap !== 'undefined' && typeof story_id !== 'undefined') {
		var sql = "select image_path from chapter_content where story_id =" +story_id+" and chap_name = 'chap-"+chap+"';";
		console.log(sql);
		conn.query(sql, function(err, ret) {
			if (err) throw err;
			if (typeof ret[0] !== 'undefined') {
				var objList = [];
				ret.forEach(e => {
					objList.push({"image_path" : e.image_path});
				});
				res.send(JSON.stringify(objList));
			} else {
				res.send('null');
			}
		});
	} else {
		res.send('invalid param');
	}
});

var server = app.listen(process.env.PORT || 3000, function() {
	var host = server.address().address
	var port = server.address().port
	console.log("Ung dung Node.js dang hoat dong tai dia chi http://%s:%s",host,port)
});
