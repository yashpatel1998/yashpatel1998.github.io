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
    this.filterWorkSection(experiencesObject);
  }

  filterWorkSection(experiences){
    // Filter the experience based on duration
    // If current date is >= duration then show else do not show
    experiences.filter(work => {
      let startDuration = work.duration.split('-')[0];
      let startMonth = parseInt(startDuration.split('/')[0])
      let startYear = parseInt(startDuration.split('/')[1]);
      let todaysDate = new Date();
      console.log(`startMonth = ${startMonth}\nstartYear = ${startYear}`);
      console.log(`todaysDate.getFullYear() = ${todaysDate.getFullYear()}\todaysDate.getMonth() = ${todaysDate.getMonth()}`);
      if(todaysDate.getFullYear() >= startYear && todaysDate.getMonth() >= startMonth)
        return true;
      return false;
    })
    this.experiences = experiences;
  }

  ngOnInit(): void {
  }

}
