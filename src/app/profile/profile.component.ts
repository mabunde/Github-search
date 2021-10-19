import {Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;
  repos = [];
  profileService: ProfileService;
  router: Router;

constructor(profileService: ProfileService, router: Router) { 
    this.profileService = profileService;
    this.router = router;
}


ngOnInit(): void {
    this.user = this.profileService.user;
    this.repos = this.profileService.repos;
}

}
