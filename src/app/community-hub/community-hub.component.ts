import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Community} from '../lib/models/Community';
import {CommunityAPIService} from '../community-api.service';

@Component({
  selector: 'app-community-hub',
  templateUrl: './community-hub.component.html',
  styleUrls: ['./community-hub.component.scss']
})
export class CommunityHubComponent implements OnInit {

  communityId: string;
  private sub: any;
  community: Community;

  constructor(private route: ActivatedRoute,
              private api: CommunityAPIService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.communityId = params.id;
    });

    this.api.getCommunityById(this.communityId)
      .subscribe((community: Community) => {
        this.community = community;
      });
  }

}
