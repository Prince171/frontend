import { Component, OnInit } from '@angular/core';
import {JobsService}from '../Services/job-service';
import { IJobs } from '../interfaces/IJobs';

@Component({
  selector: 'app-display-jobs',
  templateUrl: './display-jobs.component.html',
  styleUrls: ['./display-jobs.component.css']
})
export class DisplayJobsComponent implements OnInit  {
jobs;
  
constructor(public serv:JobsService) {}

  ngOnInit() {
 
    this.serv.getAllJobs().subscribe((job) => {this.jobs = job,console.log(job);
  });
}

}
