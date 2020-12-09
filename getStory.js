class Story{
    constructor(avt, link, title, chapCount, dateUpdate, rate, rateCount) {
        this.avt = avt;
        this.link = link;
        this.title = title;
        this.chapCount = chapCount; 
        this.dateUpdate = dateUpdate;
        this.rate = rate;
        this.rateCount = rateCount;
    }
}
var stories = document.querySelectorAll('.comic-item');
var ret = "";
var objList = [];
for (var i = 0; i < stories.length; i++) {
    var avt = stories[i].querySelectorAll('.comic-img>a>img')[0].src;
    var link = stories[i].querySelectorAll('.comic-title-link>a')[0].href;
    var title = stories[i].querySelectorAll('.comic-title-link>a')[0].title;
    var chapCount = stories[i].querySelectorAll('.comic-title-link>a')[1].innerText;
    var dateUpdate = stories[i].querySelectorAll('.comic-title-link>span')[0].innerText;
	var rate = stories[i].querySelectorAll('.comic-title-link>p>span.blue')[0].innerText;
	var rateCount = stories[i].querySelectorAll('.comic-title-link>p>span.cat-vote.round-vote')[0].innerText;
	var story = new Story(avt, link, title, chapCount, dateUpdate, rate, rateCount);
    objList.push(story);
}
ret = JSON.stringify(objList);
var cp = document.createElement("textarea");
cp.setAttribute('id','copy');
cp.setAttribute('display','hidden');
cp.value = ret;
document.body.appendChild(cp);
cp.select();
document.execCommand('copy');
document.removeChild(cp);
