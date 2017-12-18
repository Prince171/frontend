import { Observable } from "rxjs/Observable";
import {AppConfig} from './../app-config'
import  { IJobs} from './../interfaces/IJobs'
import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, RequestOptionsArgs,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class JobsService implements OnInit {

  constructor(private _http: Http) {}

  ngOnInit() {
  }
     public getAllJobs():Observable<IJobs[]>{
               return this._http.get("http://localhost:63953/api/jobs")
              .map((response:Response)=><IJobs[]>response.json());
      }
}
//	
