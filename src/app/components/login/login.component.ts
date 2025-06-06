import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username = '';
  password = '';
  error = '';

  private employees = ['john', 'jane', 'alice', 'bob'];

  constructor(private router: Router) {}

  login() {
    const uname = this.username.trim().toLowerCase();
    const pwd = this.password.trim();

    if (uname === 'admin' && pwd === 'admin') {
      this.router.navigate(['/admin']);
    } else if (this.employees.includes(uname)) {
      if (pwd === 'admin') {
        this.router.navigate([`/employee/${uname}`]);
      } else {
        this.error = 'Wrong credentials';
      }
    } else {
      this.error = 'Employee not found or wrong credentials';
    }
  }
}
