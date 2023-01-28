import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RpgProject2DComponent } from './rpg-project2-d.component';

describe('RpgProject2DComponent', () => {
  let component: RpgProject2DComponent;
  let fixture: ComponentFixture<RpgProject2DComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RpgProject2DComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RpgProject2DComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
