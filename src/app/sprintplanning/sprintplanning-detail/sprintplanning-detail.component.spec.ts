import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SprintplanningDetailComponent } from './sprintplanning-detail.component';

describe('SprintplanningDetailComponent', () => {
  let component: SprintplanningDetailComponent;
  let fixture: ComponentFixture<SprintplanningDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SprintplanningDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprintplanningDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
