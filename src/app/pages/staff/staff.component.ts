import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StaffService } from 'src/app/services/staff.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  createFormData={
    crudMode:'create',
    staff:null
  }

  staffForm!:FormGroup

  // constructor(private staffService:StaffService,private route:Router){}
  
  ngOnInit(): void {

  }
  // formControl() {
  //   this.staffForm=new FormGroup({
  //     fname:new FormControl(null,[Validators.required]),
  //     mname:new FormControl(null,[Validators.required]),
  //     lname:new FormControl(null,[Validators.required]),
  //     address:new FormControl(null,[Validators.required])
  //   })
  // }
  
  // onSave(){
  //   const values=this.staffForm.value;
  //   this.staffService.add(values).subscribe((response)=>{
  //     console.log("values are=>",values)
  //     this.staffForm.reset();
  //   })

  // }

}
