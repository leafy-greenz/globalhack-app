import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-create-question-dialog',
  templateUrl: './create-question-dialog.component.html',
  styleUrls: ['./create-question-dialog.component.scss']
})
export class CreateQuestionDialogComponent {

  createQuestionForm: FormGroup;

  constructor(private dialogRef: MatDialogRef<CreateQuestionDialogComponent>,
              private fb: FormBuilder) {
    this.createQuestionForm = this.fb.group({
      text: ''
    });
  }

  submitQuestion(): void {
    this.dialogRef.close(this.createQuestionForm.value);
  }

}
