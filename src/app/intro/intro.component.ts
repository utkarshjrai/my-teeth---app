import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 1000
  };
  constructor() { }

  ngOnInit() {}

}
