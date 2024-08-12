import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { DUMMY_TASKS } from './dummy-tasks';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, NewTaskComponent],
})
export class TasksComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) userName!: string | undefined;
  isAddingTask = false;

  constructor(private tasksService: TasksService) {}

  tasks = DUMMY_TASKS;

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.id)
  }

  onCompleteTask(id: string) {
    
  }

  onStartAddTasks() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(taskData: NewTaskData) {
    this.isAddingTask = false;
  }
}
