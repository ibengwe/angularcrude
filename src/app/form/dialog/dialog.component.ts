import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit{
  staffForm!:FormGroup
  constructor(@Inject(MAT_DIALOG_DATA)private data:{crudeMode:string,user:any},
  public dialogRef:MatDialogRef<DialogComponent>
  
  ){}

  ngOnInit(): void {
    console.log('passed data are=>',this.data)

  }
  onClose(){
    this.dialogRef.close("The dialog has closed")
  }
  

}
