import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductbacklogListComponent } from './productbacklog-list.component';

describe('ProductbacklogListComponent', () => {
  let component: ProductbacklogListComponent;
  let fixture: ComponentFixture<ProductbacklogListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductbacklogListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductbacklogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
