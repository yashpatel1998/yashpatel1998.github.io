import { Component, OnInit } from '@angular/core';
import {experiencesObject} from '../../assets/objects/experiences';

@Component({
  selector: 'app-work-section',
  templateUrl: './work-section.component.html',
  styleUrls: ['./work-section.component.css']
})
export class WorkSectionComponent implements OnInit {
  experiences: object;
  constructor() { 
    this.experiences = experiencesObject;
  }

  ngOnInit(): void {
  }

}
