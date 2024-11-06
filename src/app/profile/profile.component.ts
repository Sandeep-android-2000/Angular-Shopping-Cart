import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroArrowRightOnRectangleSolid, heroFolderArrowDownSolid, heroFolderSolid, heroUsersSolid, heroWalletSolid } from '@ng-icons/heroicons/solid';
import { UserInfoComponent } from "./user-info/user-info.component";
import { PanCardInfoComponent } from "./pan-card-info/pan-card-info.component";
import { AuthService } from '../services/auth.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterLink, RouterOutlet, NgIconComponent, UserInfoComponent, RouterLinkActive, PanCardInfoComponent,NgIf],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
  viewProviders: [provideIcons({ heroUsersSolid,heroWalletSolid,heroFolderSolid,heroFolderArrowDownSolid,heroArrowRightOnRectangleSolid })]
})
export class ProfileComponent {
  private authService = inject(AuthService)
  private router = inject(Router)

  isLoggedIn = this.authService.isLoggedInSignal
  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login'])
  }

  onLogIn() {
    //this.authService.login();
    this.router.navigate(['/login'])
  }

  getUserName(): string | null {
    return this.authService.getUserName();
  }


}
