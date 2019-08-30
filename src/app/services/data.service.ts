import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get("../assets/data/data.json");
  }

  getData1(){
    return this.http.get(environment.getData1,{
      headers:new HttpHeaders({
        "Content-Type": "application/json"
      })
    })
  }
}
