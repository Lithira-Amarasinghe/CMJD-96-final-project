import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveSubCategoryComponent } from './remove-sub-category.component';

describe('RemoveSubCategoryComponent', () => {
  let component: RemoveSubCategoryComponent;
  let fixture: ComponentFixture<RemoveSubCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveSubCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveSubCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
