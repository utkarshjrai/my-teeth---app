import { Component, OnInit, Input } from '@angular/core';
import { Set } from '../services/data.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {
  @Input() set: Set;
  @Input() refreshColor;

  constructor() { }

  ngOnInit() {
  }

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }


  changeBackground() {
    if (this.refreshColor) {
      const color = Math.floor(0x1000000 * Math.random()).toString(16);
      return { 'background-color': ('#' + ('000000' + color).slice(-6)) };
    }
  }
}
