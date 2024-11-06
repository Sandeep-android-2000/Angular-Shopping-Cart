import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [NgClass],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})
export class ToastComponent {
  message = '';
  isVisible = false;
  @Input() isRemoval: boolean = false;

  // Function to show the toast notification
  showToast(message: string,isRemoval:boolean) {
    this.message = message;
    this.isVisible = true;
    this.isRemoval = isRemoval;

    // Hide the toast automatically after 3 seconds
    setTimeout(() => {
      this.isVisible = false;
    }, 3000);
  }

}
