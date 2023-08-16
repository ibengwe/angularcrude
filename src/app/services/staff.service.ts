import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  private apiUrl =String("http://localhost:8081/api/v1/staff")

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get(this.apiUrl);
  }
  add(body:any){
    return this.http.post(this.apiUrl,body)
  }

  getById(staffId:any){
    // return this.http.get(this.apiUrl+'/'+staffId)
    const url=`${this.apiUrl}/${staffId}`
    return this.http.get(url);
  }

  updateStaff(staff:any,staffId:number){
    const url=`${this.apiUrl}/${staffId}`
    return this.http.put(url,staff)

  }

  delete(staffId:any){
    const url=`${this.apiUrl}/${staffId}`
    return this.http.delete(url);

  }
  
  
}


