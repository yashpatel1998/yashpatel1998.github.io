import { Component } from '@angular/core';
import {navbarItemsLeft,navbarItemsRight} from '../assets/objects/navbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = ' Yash Patel';
  navbarItemsLeft:object;
  navbarItemsRight:object;
  isScreenSmall:boolean;
  constructor(){
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
  navItemClick(event){
    
    // if(event.target.innerHTML === 'About Me'){
    //   console.log(event.target.innerHTML );
    //   window.scrollTo(0,0);
    // }
  }
ngOnInit(): void {};
}
