import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { Utils } from './utils';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected year = new Date().getFullYear();

  constructor(private router: Router, private utils: Utils) {}

  getUserName() {
    const user = UserService.getActiveUser();
    return `${user.firstName} ${user.lastName}`;
  }

  hasAuth() {
    return UserService.hasAuth();
  }

  doLogout() {
    this.utils.showDialog("Are you sure you want to logout?",
       () => {
      UserService.logout();
      this.router.navigateByUrl('/login')
    },
    "Logout now",
    "Don't logout"
  )
  }
}


