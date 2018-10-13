import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {CommunityHubComponent} from './community-hub/community-hub.component';
import {EventDetailsComponent} from './community-hub/event-details/event-details.component';
import {CreateEventComponent} from './create-event/create-event.component';
import {CreateCommunityComponent} from './create-community/create-community.component';

const appRoutes = [
  { path: '', component: LoginComponent, data: {title: 'Login'} },
  { path: 'home', component: HomeComponent, data: {title: 'Home'} },
  { path: 'community/:id', component: CommunityHubComponent, data: {title: 'Community'} },
  { path: 'event/:id', component: EventDetailsComponent, data: {title: 'Event'} },
  { path: 'create-event', component: CreateEventComponent, data: {title: 'Create Event'} },
  { path: 'create-community', component: CreateCommunityComponent, data: {title: 'Create Community'} }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
