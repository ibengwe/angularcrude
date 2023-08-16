import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StaffService } from 'src/app/services/staff.service';

@Component({
  selector: 'app-staff-form',
  templateUrl: './staff-form.component.html',
  styleUrls: ['./staff-form.component.css']
})
export class StaffFormComponent implements OnInit,OnChanges {

 @Input() formData!:{
    crudMode:string;
    staff:any
  }
  ngOnInit(): void {
    console.log("passed value are=>",this.formData)
    this.formControl();

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('changed data are',this.formData)

    if(this.formData.crudMode==='edit'){
      if(this.formData.staff!=null && this.formData.staff!=undefined){
        this.staffForm.get('staffId')?.setValue(this.formData.staff.staffId);
      this.staffForm.get('fname')?.setValue(this.formData.staff.fname);
      this.staffForm.get('mname')?.setValue(this.formData.staff.mname);
      this.staffForm.get('lname')?.setValue(this.formData.staff.lname);
      this.staffForm.get('address')?.setValue(this.formData.staff.address)

      }
    }
  }
  staffForm!:FormGroup

  constructor(private staffService:StaffService,private route:Router){}

  formControl() {
    this.staffForm=new FormGroup({
      fname:new FormControl(null,[Validators.required]),
      mname:new FormControl(null,[Validators.required]),
      lname:new FormControl(null,[Validators.required]),
      address:new FormControl(null,[Validators.required])
    })
  }
  onSave(){
    const values=this.staffForm.value;
    if(this.formData.crudMode==='create'){
      this.staffService.add(values).subscribe((response)=>{
        console.log("values are=>",values)
        this.staffForm.reset();
      });
    }
    else if(this.formData.crudMode==='edit'){
      values['staffId']=this.formData.staff.staffId;
        const staffId=this.staffForm.value.staffId;
        this.staffService.updateStaff(values,staffId).subscribe((response)=>{
          console.log(values);
        })  
    }
  }
}
