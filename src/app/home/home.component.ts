import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CommunityAPIService} from '../community-api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Event} from '../lib/models/Event';
import {Community} from '../lib/models/Community';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MatAutocompleteSelectedEvent, MatChipInputEvent} from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  allCommunities: Community[];
  allEvents: Event[];
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  tagsCtrl = new FormControl();
  filteredTags: Observable<string[]>;
  tags: string[] = [];
  allTags: string[] = ['Culture', 'Education', 'Employment'];

  @ViewChild('tagsInput') tagsInput: ElementRef<HTMLInputElement>;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private communityService: CommunityAPIService) {
    this.filteredTags = this.tagsCtrl.valueChanges.pipe(
      startWith(null),
      map((tag: string | null) => tag ? this._filter(tag) : this.allTags.slice())
    );
  }

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

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.tags.push(value.trim());
    }
    if (input) {
      input.value = '';
    }
    this.tagsCtrl.setValue(null);
  }

  remove(tag: string): void {
    const index = this.tags.indexOf(tag);
    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.tags.push(event.option.viewValue);
    this.tagsInput.nativeElement.value = '';
    this.tagsCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allTags.filter(tag => tag.toLowerCase().indexOf(filterValue) === 0);
  }

  goToCommunityFromCommunity(community: Community): void {
    this.router.navigateByUrl('/community/' + community._id);
  }

  goToCommunityFromEvent(event: Event): void {
    this.router.navigateByUrl('/community/' + event._id);
  }

}
