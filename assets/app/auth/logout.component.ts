import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from "./user.model";
import { AuthService } from "./auth.service";

@Component({
    selector: 'app-logout',
    template: `
        <div class="col-md-8 col-md-offset-2">
          Are you sure?
          <button class="btn btn-danger"
            (click)="onLogout()">Logout</button>
        </div>
    `
})
export class LogoutComponent {
  constructor(private authService: AuthService,
                      private router: Router) {}

    onLogout() {
        this.authService.logout();
        this.router.navigate(['/auth', 'signin']);
    }
}
