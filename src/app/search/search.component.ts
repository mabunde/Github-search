import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../profile.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


    profileService: ProfileService;

  constructor(profileService: ProfileService, private router: Router) {
    this.profileService = profileService;
   }

  ngOnInit(): void {

}
}
