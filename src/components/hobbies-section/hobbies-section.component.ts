import { Component, OnInit } from '@angular/core';
import {hobbies} from '../../assets/objects/hobbies'

@Component({
  selector: 'app-hobbies-section',
  templateUrl: './hobbies-section.component.html',
  styleUrls: ['./hobbies-section.component.css']
})
export class HobbiesSectionComponent implements OnInit {
  hobbies:object;
  constructor() { 
    this.hobbies = hobbies;
  }

  ngOnInit(): void {
  }

}
