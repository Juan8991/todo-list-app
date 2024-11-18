import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TASK } from 'src/app/interfaces/task.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public taskList: TASK[];
  public taskForm: FormControl;

  constructor(){
    this.taskList = [{ task: 'Organize Garage', completed: false },
      { task: 'Bake Cookies', completed: false },
      { task: 'Do Laundry', completed: false },
      { task: 'Make Dinner', completed: false },
      { task: 'Walk Dog', completed: false }];
    this.taskForm = new FormControl('',Validators.required);
  }

  addTask(){
    if (this.taskForm.valid) {
      this.taskList.push({ task: this.taskForm.value, completed: false });
      this.taskForm.reset();
    }
  }

  toggleTask(index: number) {
    this.taskList[index].completed = !this.taskList[index].completed;
  }

  deleteItemsFromList(){
    this.taskList = this.taskList.filter(task => !task.completed);
  }
}
