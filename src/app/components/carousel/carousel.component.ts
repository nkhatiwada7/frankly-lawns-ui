import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  images = [
    { path: '../../assets/firstImage.jpg' },
    { path: '../../assets/green-lawn-with-tree.jpg' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
