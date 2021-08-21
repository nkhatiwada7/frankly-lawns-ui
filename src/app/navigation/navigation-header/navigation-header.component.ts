import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-navigation-header',
  templateUrl: './navigation-header.component.html',
  styleUrls: ['./navigation-header.component.scss']
})
export class NavigationHeaderComponent implements OnInit {

  navigationOptions = [
    {label: 'Home', route: ['/home']},
    {label: 'Services', route: ['/services']},
    {label: 'About', route: ['/about']},
    {label: 'Contact', route: ['/contact']}
  ]

  @Output() sideNav: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  toggleSideNav(): void {
    this.sideNav.emit(true);
  }

}
