import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductbacklogControlComponent } from './productbacklog-control.component';

describe('ProductbacklogControlComponent', () => {
  let component: ProductbacklogControlComponent;
  let fixture: ComponentFixture<ProductbacklogControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductbacklogControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductbacklogControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
