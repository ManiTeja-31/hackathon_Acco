import { Component, Input, computed, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

interface Task {
  id: number;
  name: string;
  duration?: string;
  completed: boolean;
  started: boolean;
  startTime?: number;
  endTime?: number;
}

@Component({
  selector: 'app-task-duration-list',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './task-duration-list.component.html',
  styleUrls: ['./task-duration-list.component.scss']
})
export class TaskDurationListComponent {
  @Input({ required: true }) tasks!: Signal<Task[]>;

  taskStatuses = computed(() =>
    this.tasks().map(task => {
      let status = 'Not Started';

      if (task.started && !task.completed) {
        status = 'In Progress';
      } else if (task.completed && task.duration) {
        status = `Completed in ${task.duration}`;
      }

      return {
        name: task.name,
        status
      };
    })
  );
}
