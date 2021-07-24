import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userName = '';
  password = '';
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  handleLoginClick() {
    if (this.userName === 'abc' && this.password === '123') {
      this.userService.setIsUserLogin(true);
      this.router.navigate(['/home'])
    }
  }

}
