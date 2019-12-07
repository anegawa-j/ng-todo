import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo/todo.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule } from '@angular/forms';
import { FeatherModule } from 'angular-feather';
import { Circle, Trash2 } from 'angular-feather/icons';

const icons = {
  Circle,
  Trash2
};

@NgModule({
  declarations: [TodoComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
    AccordionModule.forRoot(),
    ButtonsModule,
    FormsModule,
    PaginationModule.forRoot(),
    FeatherModule.pick(icons)

  ]
})
export class TodoModule { }
