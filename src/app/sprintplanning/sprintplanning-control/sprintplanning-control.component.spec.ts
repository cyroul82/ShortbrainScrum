import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SprintplanningControlComponent } from './sprintplanning-control.component';

describe('SprintplanningControlComponent', () => {
  let component: SprintplanningControlComponent;
  let fixture: ComponentFixture<SprintplanningControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SprintplanningControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprintplanningControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
