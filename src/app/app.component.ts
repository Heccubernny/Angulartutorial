import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ServerName = "Express";
  ServerPID = 11;
  ServerStatus = 'offline';
  StatusFlag = false;
  buttonState = true;
  disableButton = '';
  state = false;
  flag=true;
  tdstate = true;
  counter = [];

  studentRoster = ['Arya', 'Rohit', 'Upasana'];
  currentName = '';
  

  toggleDisplay(){
    this.tdstate = !this.tdstate;
    this.counter.push(this.counter.length + 1);
  }

  getlength(){
    if (this.counter.length > 4) {
      return 'blue';
      
    }else{
      return 'black';
    }
  }


  add(){
    this.studentRoster.push(this.currentName);
  }

  toggleFlag(){
    this.flag = !this.flag;
    return this.flag;
  }

  resetServerStatus(){
    this.ServerName='';
  }
 
  getColor(){
    if (this.flag === true) {
      return "green";
    }else{
      return 'red';
    }
  }

  checkName(){
    if(this.ServerName === ''){
      this.state = true;
      return this.state;
    }
  }


  constructor() {
    setTimeout(() => {
      this.buttonState = false;
    }, 2500);
    
  }
  

  toggleServerStatus() {
    this.StatusFlag = !this.StatusFlag;

    if (this.StatusFlag === true) {
      this.ServerStatus = 'online';
    }
    else{
      this.ServerStatus = "offline";
    }

    return this.ServerStatus;
  }


}
