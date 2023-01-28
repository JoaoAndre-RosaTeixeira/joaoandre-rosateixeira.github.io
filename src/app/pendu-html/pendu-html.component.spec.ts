import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenduHtmlComponent } from './pendu-html.component';

describe('PenduHtmlComponent', () => {
  let component: PenduHtmlComponent;
  let fixture: ComponentFixture<PenduHtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PenduHtmlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PenduHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
