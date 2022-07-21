import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {


  email: string = '';
  password: string = '';
  error: boolean = false;

  constructor(private userServices: UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  authenticate() {
    const user = this.userServices.getUserByEmailAndPassword(this.email, this.password);

    if (user) {
      sessionStorage.setItem('user', JSON.stringify(user));
      this.router.navigateByUrl('/sell');
    } else {
      this.error = true;
    }
  }

}
