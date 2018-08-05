import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http'

import { VideoService } from '../videos/videos.service';
import { VideoItem } from '../videos/video';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [VideoService]
})
export class HomeComponent implements OnInit, OnDestroy {
	private req: any;
	//homeImageList = [
		// {image: "assets/images/nature/4.jpg", title: "Image 5", link: '/videos/video-1'},
		// {image: "assets/images/nature/5.jpg", title: "Image 4", link: '/videos/video-1'},
		// {image: "assets/images/nature/6.jpg", title: "Image 6", link: '/videos/video-1'}
		// {image: "assets/images/nature/4.jpg", name: "Image 5", slug: 'video-1'},
		// {image: "assets/images/nature/5.jpg", name: "Image 4", slug: 'video-1'},
		// {image: "assets/images/nature/6.jpg", name: "Image 6", slug: 'video-1'}

	//]
  homeImageList: [VideoItem] = [] as [VideoItem]
  videoListDefaultImage = 'assets/images/videos/default_1.jpg'

  constructor(private _http: Http, private router: Router, private _video: VideoService) { }

  ngOnInit() {
  	//this.req = this._http.get('assets/json/videos.json').subscribe(data=>{
    this.req = this._video.list().subscribe(data=>{  
  		//console.log(data.json())
      //data.json().filter(item=>{
      data.filter(item=>{  
        if (item.featured) {
          this.homeImageList.push(item)
        }
      })
      //this.homeImageList = data.json();
  	})
  }

  ngOnDestroy() {
  	this.req.unsubscribe()
  }

  preventNormal(event:MouseEvent, image:any) {
  	if(!image.prevented) {
  		  	//alert("Working..")
  			//console.log(image)
  			//console.log(image.getAttribute("href"))
  			event.preventDefault()
  			//image.setAttribute("href", "/videos")

  			//image.link = '/videos';
  			//image.prevented = true;
  			this.router.navigate(['./videos'])
  		}
  }

}
