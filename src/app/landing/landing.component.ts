import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scroll(0,0)
    /* this.carouselTransition() */
  }

  /* carouselTransition() {
    $("#myCarousel").carousel({
      interval: false
    });
  } */

}
