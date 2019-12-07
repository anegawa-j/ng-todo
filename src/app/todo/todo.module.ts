import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo/todo.component';
import { AccordionModule, ButtonsModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [TodoComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
    AccordionModule,
    ButtonsModule,
    FormsModule
  ]
})
export class TodoModule { }
