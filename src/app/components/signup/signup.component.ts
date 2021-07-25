import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  userName = '';
  password = '';
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  handleLoginClick(loginForm: any) {
    console.log(loginForm)
    if (loginForm.valid) {
      if (this.userName === 'abc' && this.password === '123') {
        this.userService.setIsUserLogin(true);
        this.router.navigate(['/home'])
      }
    }
  }

}
