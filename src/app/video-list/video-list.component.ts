import { Component, OnInit, OnDestroy } from '@angular/core';
//import { Http } from '@angular/http';

import { VideoService } from '../videos/videos.service';
import { VideoItem } from '../videos/video';

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  providers: [VideoService]
})
export class VideoListComponent implements OnInit, OnDestroy {
	req: any;
	title = 'Video List';
	//videoList = ["Item 1", "Item 2", "Item 3"];
	//todayDate;
	videoList: [VideoItem];
	// videoList = [
	// 	{
	// 	name: "Item 1",
	// 	slug: "item-1",
	// 	embed: `JFcgOboQZ08`,
	// 	},
	// 	{
	// 	name: "Item 2",
	// 	slug: "item-2",
	// 	embed: `I9cTsZKn8bY`,
	// 	},
	// 	{
	// 	name: "Item 3",
	// 	slug: "item-3",
	// 	embed: `1XOYXrsLtLA`,
	// 	}
	// ]


	//Before adding VideoService
	//constructor(private _http: Http) { }
	//After adding VideoService
	constructor(private _video: VideoService) { }

  ngOnInit() {
  	//this.todayDate = new Date();
  	//Before adding VideoService
  	//this.req = this._http.get('assets/json/videos.json').subscribe(data=>{
  		//console.log(data.json())
  		//this.videoList = data.json() as [any];
  	//After adding VideoService
  	this.req = this._video.list().subscribe(data=>{
  	//this.req = this._video.search('Item 3').subscribe(data=>{
  		this.videoList = data as [VideoItem];
  	})
  }

  ngOnDestroy() {
  	this.req.unsubscribe();
  }

  // getEmbedUrl(item) {
  // 	return 'https://www.youtube.com/embed/' + item.embed
  // }

}
