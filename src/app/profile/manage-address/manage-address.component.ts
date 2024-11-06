import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-manage-address',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './manage-address.component.html',
  styleUrl: './manage-address.component.css'
})
export class ManageAddressComponent {
  addressForm: FormGroup;
  states = [
    'Andhra Pradesh', 'Karnataka', 'Kerala', 'Tamil Nadu', 'Telangana',
    // Add more states as needed
  ];

  constructor(private fb: FormBuilder) {
    this.addressForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      pincode: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]],
      locality: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      landmark: [''],
      alternatePhone: ['', Validators.pattern('^[0-9]{10}$')],
      addressType: ['Home', Validators.required]
    });
  }

  useCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Here you would typically make an API call to reverse geocode
          // the coordinates and fill in the address fields
          console.log('Location:', position);
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    }
  }

  onSubmit() {
    if (this.addressForm.valid) {
      console.log('Form submitted:', this.addressForm.value);
      // Handle form submission
    } else {
      this.markFormGroupTouched(this.addressForm);
    }
  }

  onCancel() {
    this.addressForm.reset();
    // Additional cancel logic (e.g., navigation)
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

}
