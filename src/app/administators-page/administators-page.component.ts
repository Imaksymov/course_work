import { Component, OnInit } from '@angular/core';
import { IUser } from '../interfaces/user';
import { AdminService } from '../services/admin.service';

declare var ad: any;
@Component({
  selector: 'app-administators-page',
  templateUrl: './administators-page.component.html',
  styleUrls: ['./administators-page.component.css']
})
export class AdministatorsPageComponent implements OnInit {

  userList:IUser[]=[];
  selectedUser?:IUser;

  constructor(private service: AdminService) { }

  ngOnInit(): void {
    this.updateUsers();

  }

  updateUsers(){
    this.service.getUser().subscribe(
      (admin)=>{
        this.userList=admin;
      }
    );
    }
    addUser(user:IUser){
      this.service.postUser(user).subscribe(
        (admin)=>{
          console.log(admin);
          this.updateUsers();
        }
      );
    }
   

    deleteUser(user:IUser){
      this.service.deleteUser(user).subscribe(
        ()=>{
  
          this.updateUsers();
        }
      );
    }

}

