import { Component, OnInit } from '@angular/core';
import { IUser } from '../interfaces/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.css']
})
export class NewsPageComponent implements OnInit {

  userList:IUser[]=[];
  selectedUser?:IUser;


  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.updateUsers();

  }

  updateUsers(){
    this.service.getUser().subscribe(
      (users)=>{
        this.userList=users;
      }
    );
    }
    addUser(user:IUser){
      this.service.postUser(user).subscribe(
        (users)=>{
  
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
