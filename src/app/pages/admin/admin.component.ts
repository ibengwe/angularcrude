import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/form/dialog/dialog.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private dialog:MatDialog){}

  ngOnInit(): void {
  }


  onClick(){
    const options={
      data:{
        crudeMode:'create',
        user:null

      },
      width:'100%',
      height:'80%',
      alignment:'center',
      margin:'20px',
      disableClose:true
      
    }
 
   const dialog= this.dialog.open(DialogComponent,options)
  }

}
