import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-delete-confimation-dialog',
  templateUrl: './delete-confimation-dialog.component.html',
  styleUrls: ['./delete-confimation-dialog.component.css']
})
export class DeleteConfimationDialogComponent implements OnInit{

  constructor(@Inject(MAT_DIALOG_DATA) public data:any) {
  }

  ngOnInit() {
  }


}
