import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHeaderFooterComponent } from './main-header-footer.component';

describe('MainHeaderFooterComponent', () => {
  let component: MainHeaderFooterComponent;
  let fixture: ComponentFixture<MainHeaderFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainHeaderFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainHeaderFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
