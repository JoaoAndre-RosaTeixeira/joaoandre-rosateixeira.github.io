import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCVComponent } from './home-cv.component';

describe('HomeCVComponent', () => {
  let component: HomeCVComponent;
  let fixture: ComponentFixture<HomeCVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
