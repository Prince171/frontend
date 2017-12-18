import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { JobsService } from './Services/job-service';
import { DisplayJobsComponent } from './display-jobs/display-jobs.component';
import { HttpModule} from '@angular/http';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    DisplayJobsComponent,
    
   
  ],
  imports: [
    BrowserModule,
    HttpModule,
    
  ],
  providers: [JobsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
