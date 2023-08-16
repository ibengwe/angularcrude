import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StaffService } from 'src/app/services/staff.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  staffList:any;

  constructor(private staffService:StaffService,private route:Router){}

  ngOnInit(): void {

    this.getAllStaff();

  }
  getAllStaff() {
    this.staffService.getAll().subscribe((response)=>{
      console.log(response);
      this.staffList=response
    })
  }
  // save staff
  onAdd(){
    return this.route.navigateByUrl("staff-add")
  }

  onEdit(item:any){
    this.route.navigateByUrl("staff-edit/"+item.staffId)
  }

  onDelete(item:any){
    this.staffService.delete(item).subscribe((response)=>{
      console.log("The values are deleted");
      this.getAllStaff();
    })
  }

}
