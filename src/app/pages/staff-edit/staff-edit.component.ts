import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StaffService } from 'src/app/services/staff.service';

@Component({
  selector: 'app-staff-edit',
  templateUrl: './staff-edit.component.html',
  styleUrls: ['./staff-edit.component.css']
})
export class StaffEditComponent implements OnInit{

  editFormData={
    crudMode:'edit',
    staff:null
  }

  staffForm!:FormGroup

  constructor(private staffService:StaffService,private activatedRoot:ActivatedRoute){}

  ngOnInit(): void {
    this.activatedRoot.params.subscribe((ParamsValue:any)=>{
      console.log("value are=>",ParamsValue);
      const staffId=ParamsValue.staffId;
      this.getStaff(staffId);
    })

    // this.formControl();

  }
  getStaff(staffId: any) {
    this.staffService.getById(staffId).subscribe((response:any)=>{
      console.log(response)
      // set our value to form
      // this.staffForm.get('staffId')?.setValue(response.staffId);
      // this.staffForm.get('fname')?.setValue(response.fname);
      // this.staffForm.get('mname')?.setValue(response.mname);
      // this.staffForm.get('lname')?.setValue(response.lname);
      // this.staffForm.get('address')?.setValue(response.address)

      this.editFormData={
        ...this.editFormData,
        staff:response

      }


    },(error:HttpErrorResponse)=>{
      console.log(error);

    })

  }
  // formControl() {
  //   this.staffForm=new FormGroup({
  //     staffId:new FormControl(null),
  //     fname:new FormControl(null,[Validators.required]),
  //     mname:new FormControl(null,[Validators.required]),
  //     lname:new FormControl(null,[Validators.required]),
  //     address:new FormControl(null,[Validators.required])
  //   })
  // }

  // onSave(){
  //   const values=this.staffForm.value;
  //   const staffId=this.staffForm.value.staffId;
  //   this.staffService.updateStaff(values,staffId).subscribe((response)=>{
  //     console.log(values);
  //   })  
  // }
}
