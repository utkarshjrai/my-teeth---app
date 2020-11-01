import { Component } from '@angular/core';
import { DataService, Set } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  allSets = [];
  colorFlag = false;
  constructor(private data: DataService) {
    this.retrieveTutorials();
  }

  refresh(ev) {
    this.colorFlag = false;
    setTimeout(() => {
      ev.detail.complete();
      this.retrieveTutorials();
    }, 3000);
  }

  retrieveTutorials(): void {
    this.data.getAll()
      .subscribe(
        data => {
          this.allSets = data.filter(val => val.published);
          this.colorFlag = true;
        },
        error => {
        });
  }

}
