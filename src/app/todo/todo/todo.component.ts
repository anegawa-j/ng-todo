import { Component, OnInit } from '@angular/core';
import * as uuid from 'uuid';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  maxPageSize = 5;
  contents: ContentModel[] = new Array();
  content: string;
  currentPage: number;

  constructor() {
    this.currentPage = 1;
  }

  ngOnInit() {
  }

  submitToDoForm(event: any) {
   this._addContent();
  }

  completeTask(content: ContentModel) {

  }

  deleteTask(id: string) {
   const newContens = this.contents.filter(content => content.getId() !== id);
   this.contents = newContens;
  }

  onPageChanged(event: any) {
    console.log(event);
  }

  private _addContent() {
    const oldContents = this.contents;
    if (oldContents.length === this.maxPageSize) {
         oldContents.pop();
         oldContents.unshift(new ContentModel(this.content));
         this.contents = oldContents;
    } else {
      this.contents.unshift(new ContentModel(this.content));
    }
    this.content = '';
  }

}

export class ContentModel {
  private id: string;
  private content: string;
  private submitDate: Date;
  constructor(content: string) {
    this.id = uuid.v4();
    this.content = content;
    this.submitDate = new Date();
  }

  getId(): string {
    return this.id;
  }

  getContent(): string {
    return this.content;
  }

  getSubmitDate(): string {
     return this.submitDate.toDateString();
  }

}
