import { Component, signal, computed, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { TaskDurationListComponent } from '../task-duration-list/task-duration-list.component';
import { MatTooltipModule } from '@angular/material/tooltip';


interface Task {
  id: number;
  name: string;
  description: string;
  started: boolean;
  completed: boolean;
  startTime?: number;
  endTime?: number;
  duration?: string;
  estimatedTime?: string; 
}

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    TaskDurationListComponent,
    MatTooltipModule
  ],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  private _tasks = signal<Task[]>([
  { id: 1, name: 'Design Homepage', description: 'Create wireframe for homepage', started: false, completed: false, estimatedTime: '30 min' },
  { id: 2, name: 'Fix Bug #404', description: 'Resolve error on profile page', started: false, completed: false, estimatedTime: '20 min' },
  { id: 3, name: 'Client Meeting', description: 'Discuss project roadmap', started: false, completed: false, estimatedTime: '45 min' }
]);


  tasks = this._tasks;
  @Output() taskProgress = new EventEmitter<number>();
 
  taskStatuses = computed(() =>
    this.tasks().map(task => {
      if (!task.started) return { id: task.id, status: 'Not Started' };
      if (task.started && !task.completed) return { id: task.id, status: 'In Progress' };
      return { id: task.id, status: `Completed in ${task.duration}` };
    })
  );

  startTask(task: Task) {
    const updated = this._tasks().map(t => {
      if (t.id === task.id && !t.started) {
        return {
          ...t,
          started: true,
          startTime: Date.now(),
          completed: false
        };
      }
      return t;
    });
    this._tasks.set(updated);
    this.emitProgress();
  }

  completeTask(task: Task) {
    const updated = this._tasks().map(t => {
      if (t.id === task.id && t.started && !t.completed) {
        const endTime = Date.now();
        const durationMs = endTime - (t.startTime || endTime);
        const minutes = Math.floor(durationMs / 60000);
        const seconds = Math.floor((durationMs % 60000) / 1000);
        const duration = `${minutes}m ${seconds}s`;

        return {
          ...t,
          completed: true,
          endTime,
          duration
        };
      }
      return t;
    });

    this._tasks.set(updated);
    this.emitProgress();
  }

  extendTask(task: Task) {
    alert(`Extend requested for "${task.name}"`);
  }

  emitProgress() {
  const tasks = this.tasks();
  const completed = tasks.filter(t => t.completed).length;
  const percent = tasks.length > 0 ? Math.round((completed / tasks.length) * 100) : 0;
  this.taskProgress.emit(percent);
}
}
