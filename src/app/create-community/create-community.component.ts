import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {CommunityAPIService} from '../community-api.service';
import {map, startWith} from 'rxjs/operators';
import {MatAutocompleteSelectedEvent, MatChipInputEvent} from '@angular/material';
import {Community} from '../lib/models/Community';

@Component({
  selector: 'app-create-community',
  templateUrl: './create-community.component.html',
  styleUrls: ['./create-community.component.scss']
})
export class CreateCommunityComponent implements OnInit {

  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  tagsCtrl = new FormControl();
  filteredTags: Observable<string[]>;
  tags: string[] = [];
  allTags: string[] = ['Culture', 'Education', 'Employment', 'Language', 'Healthcare', 'Housing'];
  formGroup: FormGroup;
  nameCtrl = new FormControl('');
  descCtrl = new FormControl('');
  locCtrl = new FormControl('');
  emailCtrl = new FormControl('');

  @ViewChild('tagsInput') tagsInput: ElementRef<HTMLInputElement>;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private communityService: CommunityAPIService,
              private formBuilder: FormBuilder) {
    this.filteredTags = this.tagsCtrl.valueChanges.pipe(
      startWith(null),
      map((tag: string | null) => tag ? this._filter(tag) : this.allTags.slice())
    );
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      nameCtrl: this.nameCtrl,
      descCtrl: this.descCtrl,
      locCtrl: this.locCtrl,
      emailCtrl: this.emailCtrl,
      tagsCtrl: this.tagsCtrl
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

  createCommunity(): void {

    this.communityService.createCommunity({
      name: this.getFormValue('nameCtrl'),
      description: this.getFormValue('descCtrl'),
      location: this.getFormValue('locCtrl'),
      members: [],
      tags: [],
      events: [],
      announcements: [],
      questions: []
    }).subscribe((community: Community) => {
      this.router.navigateByUrl('/community/' + community._id);
    });

  }

  getFormValue(formControl: string) {
    return this.formGroup.get(formControl).value;
  }

}
