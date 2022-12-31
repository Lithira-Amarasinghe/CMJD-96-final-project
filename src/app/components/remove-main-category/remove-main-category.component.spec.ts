import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveMainCategoryComponent } from './remove-main-category.component';

describe('RemoveMainCategoryComponent', () => {
  let component: RemoveMainCategoryComponent;
  let fixture: ComponentFixture<RemoveMainCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveMainCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveMainCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
