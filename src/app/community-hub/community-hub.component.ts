import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Community} from '../lib/models/Community';
import {CommunityAPIService} from '../community-api.service';
import {Event} from '../lib/models/Event';
import {Announcement} from '../lib/models/Announcement';

@Component({
  selector: 'app-community-hub',
  templateUrl: './community-hub.component.html',
  styleUrls: ['./community-hub.component.scss']
})
export class CommunityHubComponent implements OnInit {

  communityId: string;
  private sub: any;
  community: Community;
  mentorFilter = user => user.role === 'mentor';
  userFilter = user => user.role === 'user';

  constructor(private route: ActivatedRoute,
              private api: CommunityAPIService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.communityId = params.id;
    });

    this.api.getCommunityById(this.communityId)
      .subscribe((community: Community) => {
        this.community = community;

        this.community.feed = [...this.community.events, ...this.community.announcements];

        this.community.feed.sort((a: Event, b: Event) => {
          return +b.dateCreated < +a.dateCreated ? -1 : 1;
        });

        this.community.events.sort((a: Event, b: Event) => {
          return +b.dateCreated < +a.dateCreated ? -1 : 1;
        });

        this.community.announcements.sort((a: Announcement, b: Announcement) => {
          return +b.dateCreated < +a.dateCreated ? -1 : 1;
        });

        console.log(community);
      });
  }

}
