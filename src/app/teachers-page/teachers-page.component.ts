import { Component, OnInit } from '@angular/core';
import { IUser } from '../interfaces/user';
import { TeachersService } from '../services/teachers.service';



@Component({
  selector: 'app-teachers-page',
  templateUrl: './teachers-page.component.html',
  styleUrls: ['./teachers-page.component.css']
})
export class TeachersPageComponent implements OnInit {

  userList:IUser[]=[];
  selectedUser?:IUser;

  constructor(private service: TeachersService) { }

  ngOnInit(): void {
    this.updateUsers();

  }

  updateUsers(){
    this.service.getUser().subscribe(
      (teachers)=>{
        this.userList=teachers;
      }
    );
    }
    addUser(user:IUser){
      this.service.postUser(user).subscribe(
        (teachers)=>{
          console.log(teachers);
          this.updateUsers();
        }
      );
    }
    onSelect(user:IUser){
      if(this.selectedUser && user.id==this.selectedUser.id){
        this.selectedUser=undefined;

      } else{
        this.selectedUser = user;
      }
    }

    deleteUser(user:IUser){
      this.service.deleteUser(user).subscribe(
        ()=>{
  
          this.updateUsers();
        }
      );
    }

}
