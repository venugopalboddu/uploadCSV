import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  totalamount: number;
  s: any;

  constructor() { }
@Input() tabledata:any;
private sum=0;  
private value; 
  ngOnInit() {
    //this.getTotal(this.tabledata)
    console.log(this.tabledata);
  }
  onRowClick(event){
    //console.log(event);
    }
    getTotal() {
      let total = 0;
      for (var i = 0; i < this.s.length; i++) {
          if (this.s[i].amount) {
              total += this.s[i].amount;
              this.totalamount = total;
          }
      }
      console.log("sadf",total)
      return total;
  }
}
