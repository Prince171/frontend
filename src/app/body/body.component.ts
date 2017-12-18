import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
activeJobs=false;
activeBuy=false;
activeSupplies=false;
activeDiscuss=false;
  constructor() { }

  ngOnInit() {
  }
  onClickJobs(){
    this.activeJobs=true;
    this.activeBuy=false;
    this.activeSupplies=false;
    this.activeDiscuss=false;
  }
  onClickBuy(){
    this.activeJobs=false;
    this.activeBuy=true;
    this.activeSupplies=false;
    this.activeDiscuss=false;
  }
  onClickSupplies(){  
    this.activeJobs=false;
    this.activeBuy=false;
    this.activeSupplies=true;
    this.activeDiscuss=false;
  }
  onClickDiscuss(){
    this.activeJobs=false;
    this.activeBuy=false;
    this.activeSupplies=false;
    this.activeDiscuss=true;
  }
}
