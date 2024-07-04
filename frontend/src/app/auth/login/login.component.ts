import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { User } from '../../models/user';
import { ENV } from '../../env';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatCardModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(
    private router: Router
  )  {

  }

  invalidLoginText = '';

  login(loginForm: any) {
    if (loginForm.value.user === ENV.USER 
      && loginForm.value.password === ENV.PASSWORD) {
        console.log(`nav`)
        this.router.navigate(['/messages']);
      }
    else  {
      this.invalidLoginText = 'Invalid credentials'
    }
  }

}
