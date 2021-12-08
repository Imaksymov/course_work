import { Component, OnInit } from '@angular/core';
import { IUser } from '../interfaces/user';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-autho-page',
  templateUrl: './autho-page.component.html',
  styleUrls: ['./autho-page.component.css']
})
export class AuthoPageComponent implements OnInit {


  userList:IUser[]=[];
  selectedUser?:IUser;
  password1: string = "";
  login1: string = "";
  pass:string | undefined;
  login:string | undefined 
  loginForm: any = {
    login: '',
    password: '',
  }

  constructor(private service: AdminService,private router: Router) { }

  ngOnInit(): void {
    this.updateUsers();
  }
  updateUsers(){
    this.service.getUser().subscribe(
      (admin)=>{
        this.userList=admin;
        console.log(this.userList)
      }
    );
    }
  


  compare(){
    
    console.log(this.loginForm)
    this.password1 = this.loginForm.password
    this.login1 = this.loginForm.login
    console.log(this.password1 + " " +  this.login1)
    for (let n of this.userList){
      if (n.name==this.login1 && n.login==this.password1){
        this.router.navigate(['/app'])
        break
      } else{ 
        
      }
    }
   
  }

}
