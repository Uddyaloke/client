import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { Http } from '@angular/http';

import { VideoService } from '../videos/videos.service';
import { VideoItem } from '../videos/video';

@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css'],
  providers: [VideoService]
})
export class VideoDetailComponent implements OnInit {
	private routeSub: any;
  private req: any;
  video: VideoItem;
	slug: string;
  //constructor(private route: ActivatedRoute, private _http: Http) { }
  constructor(private route: ActivatedRoute, private _video: VideoService) { }

  ngOnInit() {
    //Before adding VideoService
  	// this.routeSub = this.route.params.subscribe(params => {
  	// 	//console.log(params)
  	// 	this.slug = params['slug']
   //    this._http.get('assets/json/videos.json').subscribe(data=>{
   //      data.json().filter(item=>{
   //        //console.log(item)
   //        if (item.slug == this.slug) {
   //          //console.log(item)
   //          this.video = item
   //        }

   //      })
   //   })
   //	})
    //After adding VideoService
    this.routeSub = this.route.params.subscribe(params => {
      this.slug = params['slug']
      //Before adding get function in VideoService
      //this.req = this._video.list().subscribe(data=>{
            // data.filter(item=>{
            //   if (item.slug == this.slug) {
            //     this.video = item
            //     }
            // })
          //})
      //After adding get method in VideoService
      this.req = this._video.get(this.slug).subscribe(data=>{
        this.video = data as VideoItem
      })
    })
  }

  ngOnDestroy() {
  	this.routeSub.unsubscribe()
    this.req.unsubscribe()
  }

  getEmbedUrl(item) {
    return 'https://www.youtube.com/embed/' + item.embed
  }

}
