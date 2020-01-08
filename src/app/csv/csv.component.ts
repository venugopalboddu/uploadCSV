import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {CSVRecord} from './csv';
import {Router} from '@angular/router';

@Component({
  selector: 'app-csv',
  templateUrl: './csv.component.html',
  styleUrls: ['./csv.component.css']
})
export class CsvComponent implements OnInit {
  records:any=[];
  data;
  constructor(private route:Router) { }
  
  @Output() getData = new EventEmitter
  ngOnInit() {
  }
  uploadListener($event: any): void{
    let text=[];
    let files=$event.srcElement.files;
    if(this.isValidCSVFile(files[0])){
      let input = $event.target;
      let reader = new FileReader();
      reader.readAsText(input.files[0]);

      reader.onload = () => {
        let csvData = reader.result;
        let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);

        let headersRow = this.getHeaderArray(csvRecordsArray);
   //debugger;
        this.records = this.getdata(csvRecordsArray, headersRow.length);
      //  this.records.push(data);
       //console.log("asdsa",this.records);
       //this.records=this.data
       //console.log("ada",data)

      };

    }
  }

  getdata(csvRecordsArray: any, headerLength: any) {
    let csvArr = [];

    for (let i = 1; i < csvRecordsArray.length; i++) {
      let curruntRecord = (<string>csvRecordsArray[i]).split(',');
      if (curruntRecord.length == headerLength) {
        let csvRecord: CSVRecord = new CSVRecord();
        csvRecord.Name = curruntRecord[0].trim();
        csvRecord.Email = curruntRecord[1].trim();
        csvRecord.Phone = curruntRecord[2].trim();
        csvRecord.Account = curruntRecord[3].trim();
        csvRecord.Recipient = curruntRecord[4].trim();
        csvRecord.Amount = curruntRecord[5].trim();
        csvRecord.Schedule = curruntRecord[6].trim();
        csvRecord.Reference = curruntRecord[7].trim();
        csvArr.push(csvRecord);
      }
    }
    return csvArr;
  }

  isValidCSVFile(file: any) {
    return file.name.endsWith(".csv");
  }

  getHeaderArray(csvRecordsArr: any) {
    let headers = (<string>csvRecordsArr[0]).split(',');
    let headerArray = [];
    for (let j = 0; j < headers.length; j++) {
      headerArray.push(headers[j]);
    }
    return headerArray;
  }
  // show:boolean=true;
  senddata;
  submit(){
    // this.senddata=e
     this.getData.emit(this.records)
    this.route.navigate(['/table'])
    console.log(this.records);
  }
}
