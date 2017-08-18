import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SprintplanningListComponent } from './sprintplanning-list.component';

describe('SprintplanningListComponent', () => {
  let component: SprintplanningListComponent;
  let fixture: ComponentFixture<SprintplanningListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SprintplanningListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprintplanningListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
