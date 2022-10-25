import { Component, OnInit } from '@angular/core';
import { UserService } from '../api/user.service';
import { FullUser } from '../model/full-user';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  fullUser:FullUser;

  constructor(private userService:UserService) {
    
  }

  ngOnInit() {

    
    this.userService.getUser('1').subscribe(fullUser => {
      this.fullUser = fullUser;
    });
  }

}
