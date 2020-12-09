class Story{
    constructor(avt, link, title, chapCount, updated, rate, rateCount) {
        this.avt = avt;//path 
        this.link = link;//primary detail
        this.title = title;
        this.chapCount = chapCount; 
        this.updated = updated;
        this.rate = rate;
        this.rateCount = rateCount;
    }
}
class StoryDetail{
	constructor(difName, author, subTeam, status, created, view, category, chapList) {
		// this.link = link;//primary detail
		this.difName = difName;
		this.author = author;
		this.subTeam = subTeam;
		this.status = status;
		this.created = created;
		this.view = view;
		this.category = category;
		this.chapList = chapList;//chap's num => link = <story's link>-<chap's num>
	}
}
class StoryContent{
	constructor(link, imagePath) {
		this.link = link;
		this.imagePath = imagePath;
	}
}
class StoryDB{
	constructor(id, avt, name, title, chap_count, updated, rate_count) {
		this.id = id;
		this.avt = avt;
		this.name = name;
		this.title = title;
		this.chap_count = chap_count;
		this.updated = updated;
		this.rate_count = rate_count;
	}
}
class ChapterContent{
	constructor(chap_name, story_id, image_path){
		this.chap_name = chap_name;
		this.story_id = story_id;
		this.image_path;
	}
}
class StoryDetailDB{
	constructor(story_id, dif_name, author, sub_team, status, created, view, category){
		this.story_id = story_id;
		this.dif_name = dif_name;
		this.author = author;
		this.sub_team = sub_team;
		this.status = status;
		this.created = created;
		this.view = view;
		this.category = category;
	}
}

module.exports = {
	'Story' : Story,
	'StoryDB' : StoryDB,
	'ChapterContent' : ChapterContent,
	'StoryDetailDB' : StoryDetailDB
}
