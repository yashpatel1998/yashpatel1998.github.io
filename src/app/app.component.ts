import { Component } from '@angular/core';
import {experiencesObject} from '../assets/objects/experiences'
import {skillsObject} from '../assets/objects/skill'
import {CertificatesSectionComponent} from '../components/certificates-section/certificates-section.component'
import {navbarItemsLeft,navbarItemsRight} from '../assets/objects/navbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = ' Yash Patel';
  experiences: object;
  skills: object;
  navbarItemsLeft:object;
  navbarItemsRight:object;
  isScreenSmall:boolean;
  constructor(){
    this.experiences = experiencesObject;
    this.skills = skillsObject;
    this.navbarItemsLeft = navbarItemsLeft;
    this.navbarItemsRight = navbarItemsRight;
    if (window.innerWidth < 768) {
      this.isScreenSmall = true;
    } else {
      this.isScreenSmall = false;
    }
    
  }
  onResize(event) {
    if (window.innerWidth < 720) {
      this.isScreenSmall = true;
    } else {
      this.isScreenSmall = false;
    }
  }

}
