import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {

  constructor(private router:Router) { }
  public usertype;
  public usertypestring;
  public displayName;
  chooseusertype: String;
  currentGroup: String;
  currentChannel: String;
  ngOnInit() {
    if(localStorage.length == 0){
      window.alert('Havent logged in');
      this.router.navigateByUrl('/login');
    }
  }

}
