import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent implements OnInit {
  title: string = 'Delete Confirmation';
  message: string = 'Are you sure want to delete?';
  acceptance: string = 'Delete';
  isHidden: boolean = false;

  constructor(
    private dialogRef: MatDialogRef<DeleteDialogComponent>,
  ) { }

  ngOnInit(): void {
  }

  handleClick(value: boolean): void {
    this.dialogRef.close(value);
  }

}
