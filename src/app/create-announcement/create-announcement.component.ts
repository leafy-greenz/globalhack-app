import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-create-announcement',
  templateUrl: './create-announcement.component.html',
  styleUrls: ['./create-announcement.component.scss']
})
export class CreateAnnouncementComponent {

  createAnnouncementForm: FormGroup;

  constructor(private dialogRef: MatDialogRef<CreateAnnouncementComponent>,
              private fb: FormBuilder) {
    this.createAnnouncementForm = this.fb.group({
      title: '',
      description: '',
    });
  }

  submitAnnouncement(): void {
    this.dialogRef.close(this.createAnnouncementForm.value);
  }

}
