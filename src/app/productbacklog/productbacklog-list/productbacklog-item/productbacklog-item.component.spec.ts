import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductbacklogItemComponent } from './productbacklog-item.component';

describe('ProductbacklogItemComponent', () => {
  let component: ProductbacklogItemComponent;
  let fixture: ComponentFixture<ProductbacklogItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductbacklogItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductbacklogItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
