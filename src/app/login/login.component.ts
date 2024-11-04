import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router'; 
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]], 
      password: ['', Validators.required] 
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const userid = this.loginForm.get('email')?.value; 
      const password = this.loginForm.get('password')?.value; 

      if (this.login(userid, password)) {
        sessionStorage.setItem("isloggedIn", "true");
        this.router.navigate(['/header']); 
      } else {
        sessionStorage.setItem("isloggedIn", "false");
        alert('Invalid User ID or Password. Please try again.');
      }
    } else {
      console.log('Form is invalid');
    }
  }


  login(userid: string, password: string): boolean {
    return userid === 'chandan@1' && password === '123';
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
