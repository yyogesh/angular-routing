import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  signUpForm: FormGroup;
  constructor(private router: Router, private userService: UserService, private formBuilder: FormBuilder) {
    this.signUpForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.signUpForm.get('confirmPassword')?.valueChanges.subscribe(val => {
      if (val !== this.signUpForm.get('password')?.value) {
        this.signUpForm.get('confirmPassword')?.setErrors({ 'passwordMistMatch': true })
      }
    })
  }

  handleLoginClick() {
    console.log(this.signUpForm)
    // if (this.signUpForm.valid) {
    //   if (this.userName === 'abc' && this.password === '123') {
    //     this.userService.setIsUserLogin(true);
    //     this.router.navigate(['/home'])
    //   }
    // }
  }

}
