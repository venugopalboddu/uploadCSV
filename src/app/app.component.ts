import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UploadCsv';
  data:any;
  status:boolean=true;
  senddata(e){
    this.data=e;
    this.status=false;
  }
}
