import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';

@Component({
  selector: 'app-productbacklog-control',
  templateUrl: './productbacklog-control.component.html',
  styleUrls: ['./productbacklog-control.component.css']
})
export class ProductbacklogControlComponent implements OnInit {

  constructor(public dialog: MdDialog) { }

  ngOnInit() {
  }

  onNewUserStory() {
    this.dialog.open(DialogOverviewExampleDialog);
  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
  template: `<h2 md-dialog-title>Delete all</h2>
<md-dialog-content>Are you sure?</md-dialog-content>
<md-dialog-actions>
  <button md-button md-dialog-close>No</button>
  <!-- Can optionally provide a result for the closing dialog. -->
  <button md-button [md-dialog-close]="true">Yes</button>
</md-dialog-actions>`,
})
export class DialogOverviewExampleDialog {}
