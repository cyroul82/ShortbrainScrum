import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SprintplanningItemComponent } from './sprintplanning-item.component';

describe('SprintplanningItemComponent', () => {
  let component: SprintplanningItemComponent;
  let fixture: ComponentFixture<SprintplanningItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SprintplanningItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprintplanningItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
