import { Component } from '@angular/core';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { LoginComponent } from './login/login.component';
import { GroupComponent } from './group/group.component';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router:Router){}
  title = 'chatapp';
  logOut(event){
    event.preventDefault();
    window.alert('You have been log out');
    sessionStorage.clear;
    // this.router.navigateByUrl('/login');
  }
}
