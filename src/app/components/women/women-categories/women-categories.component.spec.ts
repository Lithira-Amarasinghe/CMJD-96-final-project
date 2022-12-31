import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenCategoriesComponent } from './women-categories.component';

describe('WomenCategoriesComponent', () => {
  let component: WomenCategoriesComponent;
  let fixture: ComponentFixture<WomenCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomenCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomenCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
