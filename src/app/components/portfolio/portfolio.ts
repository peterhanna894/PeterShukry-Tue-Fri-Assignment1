import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio {
  imgSrc: string = './images/port2.png';
  displayNone: boolean = true;

  openImg(imgSrc: string) {
    this.displayNone = false;
    this.imgSrc = imgSrc;
  }

  bigImgDNone() {
    if (!this.displayNone) {
      this.displayNone = true;
    }
  }
}
