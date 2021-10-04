import { Component, OnInit } from '@angular/core';
import {educationsObject} from '../../assets/objects/education';
@Component({
  selector: 'app-education-section',
  templateUrl: './education-section.component.html',
  styleUrls: ['./education-section.component.css']
})
export class EducationSectionComponent implements OnInit {
  educations : object;
  constructor() { 
    this.educations = educationsObject;
  }

  ngOnInit(): void {
  }

}
