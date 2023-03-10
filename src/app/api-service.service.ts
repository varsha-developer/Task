import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http:HttpClient) { }

  getdata(){
    return this.http.get("http://localhost:3000/user")
  }

  postdata(obj:any){
   return this.http.post("http://localhost:3000/user", obj)
  }

  update(id:any, obj:any){
    return this.http.put("http://localhost:3000/user"+id, obj)
  }

  deletedata(id:any){
    return this.http.delete("http://localhost:3000/user/" + id)
  }
}
