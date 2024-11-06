import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-pan-card-info',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './pan-card-info.component.html',
  styleUrl: './pan-card-info.component.css'
})
export class PanCardInfoComponent {
  panForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.panForm = this.fb.group({
      panNumber: ['', [Validators.required, Validators.pattern('[A-Z]{5}[0-9]{4}[A-Z]{1}')]],
      fullName: ['', Validators.required],
      panFile: [null, Validators.required],
      declaration: [false, Validators.requiredTrue],
    });
  }

  onSubmit() {
    if (this.panForm.valid) {
      console.log('Form submitted:', this.panForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file && file.type === 'image/jpeg') {
      this.panForm.patchValue({ panFile: file });
    } else {
      alert('Only JPEG files are allowed');
    }
  }

}
