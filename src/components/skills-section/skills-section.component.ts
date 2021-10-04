import { Component, OnInit } from '@angular/core';
import {skillsObject} from '../../assets/objects/skill'

@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.css']
})
export class SkillsSectionComponent implements OnInit {
  skills:object;
  constructor() { 
    this.skills = skillsObject;
  }

  ngOnInit(): void {
  }

}
