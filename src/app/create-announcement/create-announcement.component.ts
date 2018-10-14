import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-create-announcement',
  templateUrl: './create-announcement.component.html',
  styleUrls: ['./create-announcement.component.scss']
})
export class CreateAnnouncementComponent {

  createEventForm: FormGroup;

  constructor(private dialogRef: MatDialogRef<CreateAnnouncementComponent>,
              private fb: FormBuilder) {
    this.createEventForm = this.fb.group({
      name: '',
      description: '',
      date: '',
      location: ''
    });
  }

  submitEvent(): void {
    this.dialogRef.close(this.createEventForm.value);
  }

}
