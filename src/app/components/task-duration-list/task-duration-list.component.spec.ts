import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDurationListComponent } from './task-duration-list.component';

describe('TaskDurationListComponent', () => {
  let component: TaskDurationListComponent;
  let fixture: ComponentFixture<TaskDurationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskDurationListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskDurationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
