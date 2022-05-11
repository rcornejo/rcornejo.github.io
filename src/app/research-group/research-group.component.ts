import { Component, OnInit } from '@angular/core';
import coAuthorsFile from '../../assets/static/coauthors.json'
import studentsFile from '../../assets/static/students.json'

@Component({
  selector: 'app-research-group',
  templateUrl: './research-group.component.html',
  styleUrls: ['./research-group.component.css']
})
export class ResearchGroupComponent implements OnInit {
  coAuthors = (coAuthorsFile as any);
  students = (studentsFile as any);
  constructor() { }

  ngOnInit(): void {
  }

}
