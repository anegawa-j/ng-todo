import { Component, OnInit } from '@angular/core';

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
