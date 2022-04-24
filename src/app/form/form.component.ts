import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  // user: User = {
  //   dni: null,
  //   last_name:null,
  //   name:null,
  //   email:null,
  //   whatsapp:null,
  //   telephone:null
  // };
  constructor() { }

  ngOnInit(): void {
  }
  // saveUser() {
  //   console.log(this.user);

  // }
}
