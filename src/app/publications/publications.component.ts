import { Component, OnInit } from '@angular/core';
import pubJson from '../../assets/static/publications.json';


@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {
  publications = (pubJson as any);
  lastYear =0;
  constructor() { 
    
    // this.publications[0];
    this.lastYear = this.publications.articles[0];
  }
  updateYear(year:number)
  {
    this.lastYear=year;
  }
  displayYear(year:number){
    var display:boolean=false;
    if(this.lastYear!=year){
      this.lastYear = year;
      display=true;
    }
    return display;

  }

  ngOnInit(): void {
  }

}
