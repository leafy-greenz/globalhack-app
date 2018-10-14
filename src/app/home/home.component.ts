import { Component, OnInit } from '@angular/core';
import {CommunityAPIService} from '../community-api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Event} from '../lib/models/Event';
import {Community} from '../lib/models/Community';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  allCommunities: Community[];
  allEvents: Event[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private communityService: CommunityAPIService) { }

  ngOnInit() {
    this.communityService.getAllCommunities().subscribe(communities => {
      this.allCommunities = communities;
      communities.forEach(community => {
        this.allEvents = [...this.allEvents, ...community.events];
      });
      console.log(this.allCommunities);
      console.log(this.allEvents);
    });
  }

  goToCommunityFromCommunity(community: Community): void {
    this.router.navigateByUrl('/community/' + community._id);
  }

  goToCommunityFromEvent(event: Event): void {
    this.router.navigateByUrl('/community/' + event._id);
  }

}
