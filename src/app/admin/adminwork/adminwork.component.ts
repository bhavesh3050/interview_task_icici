import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-adminwork',
  templateUrl: './adminwork.component.html',
  styleUrls: ['./adminwork.component.scss']
})
export class AdminworkComponent implements OnInit {
id:any
actionName = ' '
  constructor( private adminService :AdminService ,private formBuilder:FormBuilder, private router : Router ,private activated: ActivatedRoute ) { }


productform = this.formBuilder.group({
  title:['',Validators.required],
  id:[''],
  price: ['',Validators.required],
  description: ['',Validators.required],
  category: ['',Validators.required],
   image: [,Validators.required],
})
  ngOnInit(): void {
    this.id = this.activated.snapshot.params['id'];

    if(this.id){
      this.actionName ='update'
    this.adminService.getProductById(this.id).subscribe((el:any)=>{
      this.productform.patchValue(el)
    })
  }
  else {
    this.actionName = "create"
  }
  }
  submitProducts(data:any){
    if(this.actionName == 'create' && this.productform.valid){
      this.adminService.addNewProducts(data).subscribe((res:any)=>{
        console.log(res)
        this.router.navigateByUrl('/user')
      })
    } else{
      
      this.adminService.updateproduct(this.id,data).subscribe((el)=>{
        this.router.navigateByUrl('/user')
      })
    }
  } 

}
