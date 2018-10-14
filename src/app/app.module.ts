import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {CommunityHubComponent} from './community-hub/community-hub.component';

import {AppRoutingModule} from './app-routing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CreateCommunityComponent} from './create-community/create-community.component';
import {CreateEventComponent} from './create-event/create-event.component';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatNativeDateModule,
  MatSidenavModule,
  MatStepperModule,
  MatTabsModule,
} from '@angular/material';
import {CommunityAPIService} from './community-api.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CreateAnnouncementComponent} from './create-announcement/create-announcement.component';
import {CreateQuestionDialogComponent} from './create-question-dialog/create-question-dialog.component';
import {CreateAnswerDialogComponent} from './create-answer-dialog/create-answer-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CommunityHubComponent,
    CreateCommunityComponent,
    CreateEventComponent,
    CreateAnnouncementComponent,
    CreateQuestionDialogComponent,
    CreateAnswerDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSidenavModule,
    MatDividerModule,
    MatTabsModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatStepperModule,
    MatChipsModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule
  ],
  entryComponents: [
    CreateEventComponent,
    CreateAnnouncementComponent,
    CreateQuestionDialogComponent,
    CreateAnswerDialogComponent
  ],
  providers: [CommunityAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
