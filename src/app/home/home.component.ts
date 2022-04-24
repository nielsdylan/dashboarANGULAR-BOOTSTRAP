import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import {tap} from'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private userSvc: UsersService) { }

  ngOnInit(): void {
    this.userSvc.getUser()
      .pipe(
        tap(res => console.log(res))
      )
      .subscribe();
  }

}
