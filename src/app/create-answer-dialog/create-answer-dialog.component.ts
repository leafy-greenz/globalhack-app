import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-create-answer-dialog',
  templateUrl: './create-answer-dialog.component.html',
  styleUrls: ['./create-answer-dialog.component.scss']
})
export class CreateAnswerDialogComponent {

  createAnswerForm: FormGroup;

  constructor(private dialogRef: MatDialogRef<CreateAnswerDialogComponent>,
              private fb: FormBuilder) {
    this.createAnswerForm = this.fb.group({
      text: ''
    });
  }

  submitAnswer(): void {
    this.dialogRef.close(this.createAnswerForm.value);
  }

}
