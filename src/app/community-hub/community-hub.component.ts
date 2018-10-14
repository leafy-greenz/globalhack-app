import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Community} from '../lib/models/Community';
import {CommunityAPIService} from '../community-api.service';
import {Event} from '../lib/models/Event';
import {Announcement} from '../lib/models/Announcement';
import {MatDialog} from '@angular/material';
import {CreateEventComponent} from '../create-event/create-event.component';
import {CreateAnnouncementComponent} from '../create-announcement/create-announcement.component';
import {CreateQuestionDialogComponent} from '../create-question-dialog/create-question-dialog.component';
import {Question} from '../lib/models/Question';
import {CreateAnswerDialogComponent} from '../create-answer-dialog/create-answer-dialog.component';
import {Answer} from '../lib/models/Answer';

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
              private api: CommunityAPIService,
              private dialog: MatDialog) { }

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
      });
  }

  addEvent(): void {
    const dialogRef = this.dialog.open(CreateEventComponent);

    dialogRef.afterClosed().subscribe((value: Event) => {
      if (value) {
        value.date = new Date(value.date);
        this.api.addEventToCommunity(this.communityId, value);
        this.community.events.push(value);
        this.community.feed.push(value);

        this.community.feed.sort((a: Event, b: Event) => {
          return +b.dateCreated < +a.dateCreated ? -1 : 1;
        });

        this.community.events.sort((a: Event, b: Event) => {
          return +b.dateCreated < +a.dateCreated ? -1 : 1;
        });
      }
    });
  }

  addAnnouncement(): void {
    const dialogRef = this.dialog.open(CreateAnnouncementComponent);

    dialogRef.afterClosed().subscribe((value: Announcement) => {
      if (value) {
        this.api.addAnnouncementToCommunity(this.communityId, value);

        this.community.announcements.push(value);
        this.community.feed.push(value);

        this.community.feed.sort((a: Event, b: Event) => {
          return +b.dateCreated < +a.dateCreated ? -1 : 1;
        });

        this.community.announcements.sort((a: Announcement, b: Announcement) => {
          return +b.dateCreated < +a.dateCreated ? -1 : 1;
        });
      }
    });
  }

  addQuestion(): void {
    const dialogRef = this.dialog.open(CreateQuestionDialogComponent);

    dialogRef.afterClosed().subscribe((value: Question) => {
      if (value) {
        this.api.addQuestionToCommunity(this.communityId, value);

        this.community.questions.push(value);
        this.community.questions.sort((a: Question, b: Question) => {
          return +a.dateCreated > +b.dateCreated ? -1 : 1;
        });
      }
    });

  }

  addAnswer(questionId: string): void {
    const dialogRef = this.dialog.open(CreateAnswerDialogComponent);

    dialogRef.afterClosed().subscribe((value: Answer) => {
      if (value) {
        this.api.addAnswerToQuestion(questionId, value);

        this.community.questions.find(q => q._id === questionId).answers.push(value);
      }
    });
  }

}
