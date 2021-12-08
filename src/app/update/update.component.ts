import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { IUser } from '../interfaces/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  @Input() user?:IUser
  @Output() updated:EventEmitter<null> = new EventEmitter();

  constructor(private service:UserService) { }

  ngOnInit(): void {
  }
  updateUser(){
    if(this.user) this.service.putUser(this.user).subscribe(
      ()=>{
        this.updated.emit();
        
      }
    );
  }

}
