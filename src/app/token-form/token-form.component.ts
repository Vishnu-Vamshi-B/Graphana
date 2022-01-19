import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-token-form',
  templateUrl: './token-form.component.html',
  styleUrls: ['./token-form.component.css']
})
export class TokenFormComponent implements OnInit {
  token: string = '';
  error: string | null = '';
  constructor(private router: Router, private authService: AuthService) {  }

  ngOnInit(): void {
  }

  validate() {
    if (this.token.length >= 6) {
      this.authService.isAuthenticated = true;
        if(this.authService.redirectUrl !== null)
          this.router.navigate([this.authService.redirectUrl]);
        else  
          this.router.navigate(['']);
      } else {
        this.authService.isAuthenticated = false;
        this.error = "Invalid Token"
      }
    }
  }
