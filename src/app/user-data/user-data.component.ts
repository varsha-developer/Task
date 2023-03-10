import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit {

  constructor(private fb:FormBuilder,  private active:ApiServiceService) { }

  alldata:any
  user:any
  userform=this.fb.group({
    name:['',],
    job:['',]
  })

  ngOnInit(): void {
    this.getdata()
  }


  getdata(){
     this.active.getdata().subscribe((resp)=>{
      console.log(resp)
      this.alldata = resp
  })
}

submit(){
let obj = {
  name:this.userform.value.name,
  job:this.userform.value.job,
  id:""
}
this.active.postdata(obj).subscribe((resp)=>{
  console.log(resp)
})
this.getdata()
}

edit(arr:any){
this.userform.patchValue({
  name:arr.name,
  job:arr.job
})
this.user = arr
}

update(){
  let obj = {
    name:this.userform.value.name,
    job:this.userform.value.job,
    id:this.user.id
}
 this.active.update(this.user.id,obj).subscribe((resp)=>{
  console.log(resp)
 })
 this.getdata()
}

delete(arr:any){
  this.active.deletedata(arr.id).subscribe((resp)=>{
    console.log(arr)
  })
  this.getdata()
}

}