import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  contents: ContentModel[] = new Array();
  content: string;

  constructor() { }

  ngOnInit() {
  }

  submitToDoForm(event: any) {
   this._addContent();
  }

  private _addContent() {
    this.contents.unshift(new ContentModel(this.content));
    this.content = '';
  }

}

export class ContentModel {
  private content: string;
  private submitDate: Date;
  constructor(content: string) {
    this.content = content;
    this.submitDate = new Date();
  }

  getContent(): string {
    return this.content;
  }

  getSubmitDate(): string {
     return this.submitDate.toDateString();
  }

}
