import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  services = [
    {label: 'Lawn Care', content: ''},
    {label: 'Tree Trimming', content: ''},
    {label: 'Shrub Trimming', content: ''},
    {label: 'Mulch Installation', content: ''},
    {label: 'Pre-Emergent', content: ''},
    {label: 'Fertilizer', content: ''},
    {label: 'Pressure Washing', content: ''}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
