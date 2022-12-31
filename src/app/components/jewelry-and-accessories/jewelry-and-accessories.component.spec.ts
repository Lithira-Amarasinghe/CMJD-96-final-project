import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JewelryAndAccessoriesComponent } from './jewelry-and-accessories.component';

describe('JewelryAndAccessoriesComponent', () => {
  let component: JewelryAndAccessoriesComponent;
  let fixture: ComponentFixture<JewelryAndAccessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JewelryAndAccessoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JewelryAndAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
