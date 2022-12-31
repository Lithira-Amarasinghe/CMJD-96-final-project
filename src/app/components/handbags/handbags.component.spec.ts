import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandbagsComponent } from './handbags.component';

describe('HandbagsComponent', () => {
  let component: HandbagsComponent;
  let fixture: ComponentFixture<HandbagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandbagsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HandbagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
