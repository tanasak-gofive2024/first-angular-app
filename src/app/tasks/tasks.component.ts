import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) userId!: string
  @Input({ required: true }) name!: string

  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi labore amet laboriosam perspiciatis unde fugit est fuga voluptate aliquam totam.',
      dueDate: '2025-12-31'
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Hello world',
      summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi labore amet laboriosam perspiciatis unde fugit est fuga voluptate aliquam totam.',
      dueDate: '2025-10-31'
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Basic Angular',
      summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi labore amet laboriosam perspiciatis unde fugit est fuga voluptate aliquam totam.',
      dueDate: '2023-09-31'
    }
  ]

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId)
  }
}
