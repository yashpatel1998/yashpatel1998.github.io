import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbiesSectionComponent } from './hobbies-section.component';

describe('HobbiesSectionComponent', () => {
  let component: HobbiesSectionComponent;
  let fixture: ComponentFixture<HobbiesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HobbiesSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HobbiesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
