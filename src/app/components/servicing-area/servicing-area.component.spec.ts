import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicingAreaComponent } from './servicing-area.component';

describe('ServicingAreaComponent', () => {
  let component: ServicingAreaComponent;
  let fixture: ComponentFixture<ServicingAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicingAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicingAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
