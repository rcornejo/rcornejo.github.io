import { Component, OnInit } from '@angular/core';
import teachFile from '../../assets/static/teaching.json';

@Component({
  selector: 'app-teaching',
  templateUrl: './teaching.component.html',
  styleUrls: ['./teaching.component.css']
})
export class TeachingComponent implements OnInit {
  teaching=(teachFile as any);
  constructor() { 
    console.log(this.teaching);
  }
  log(val:any){
    console.log(val);
  }
  ngOnInit(): void {
  }

}
