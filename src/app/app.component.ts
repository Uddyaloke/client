import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template: `<h1>{{ title }}</h1><p>{{ description }} is cool !!!</p>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'App Srvup!!';
  description = 'A new app'

  private routeSub: any;
  query: string;

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
  	this.routeSub = this._route.params.subscribe(params=>{
  		console.log(params)
  		this.query = params['q']
  	})
  }

  ngOnDestroy() {
  	this.routeSub.unsubscribe()
  }
}
