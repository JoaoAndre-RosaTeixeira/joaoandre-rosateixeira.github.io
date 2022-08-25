import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetencesCVComponent } from './competences-cv.component';

describe('CompetencesCVComponent', () => {
  let component: CompetencesCVComponent;
  let fixture: ComponentFixture<CompetencesCVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetencesCVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetencesCVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
