import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PartsService {
  constructor(private http: HttpClient) { }
  // test
  getParts() {
    return this.http.get('apirequest go here');
  }


  getAPart(){
    
  }
}
