import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-cards',
  templateUrl: './service-cards.component.html',
  styleUrls: ['./service-cards.component.scss']
})
export class ServiceCardsComponent implements OnInit {

  serviceCards = [
    {title: 'Pressure Washing',
      src: 'assets/pressure-wash-before-and-after.jpg',
      alt: 'pressure-wash-before-and-after',
      content: 'Give your home/business new life. Pressure washing has many benefits including curb appeal and deep cleaning',
      btnLabel: 'SCHEDULE',
      route: ''},
    {title: 'Lawn Mowing',
      src: 'assets/mowing-tall-grass.jpg',
      alt: 'mowing-tall-grass',
      content: 'Services provided weekly. Give your house the curb appeal that it deserves. Edging services included',
      btnLabel: 'SCHEDULE',
      route: ''
    },
    {title: 'Bush Trimming',
      src: 'assets/bush-trimming.jpg',
      alt: 'pressure-wash-before-and-after',
      content: 'Bush trimmings allow yard to look cleaner and sharper. The only bush you\'ll agree with. Schedule service today!',
      btnLabel: 'SCHEDULE',
      route: ''
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
