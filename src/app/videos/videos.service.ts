import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { map, catchError } from 'rxjs/operators';
//import { of } from 'rxjs';

const endpoint = 'assets/json/videos.json'

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private _http: Http) { }

  list() {
  	return this._http.get(endpoint)
		  	.pipe(map((response: any) => response.json()))
			.pipe(catchError(this.handelError))
  }

  get(slug) {
  	return this._http.get(endpoint)
		  	.pipe(map((response: any) => {
		  		let data = response.json().filter(item=>{
					              if (item.slug == slug) {
					                return item
					                }
					            })
		  		console.log(data)
		  		if (data.length == 1) {
		  			return data[0]
		  		}
		  		return {}
		  		})
		  	)
			.pipe(catchError(this.handelError))
  }

  search(query) {
  	return this._http.get(endpoint)
		  	.pipe(map((response: any) => {
		  		let data = [];
		  		let req = response.json().filter(item=>{
					              if (item.name.indexOf(query) >= 0) {
					              	data.push(item)
					                return item
					                }
					            })
		  		return data
		  		})
		  	)
			.pipe(catchError(this.handelError))
  }

  private handelError(error: any, caught: any): any {
  	console.log(error, caught)
  }
}