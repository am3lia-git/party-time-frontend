import { Component, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders, provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Import CommonModule for *ngIf



@Component({
  selector: 'app-rsvp',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './rsvp.component.html',
  styleUrl: './rsvp.component.css',
})
export class RsvpComponent {
  name: string = '';
  email: string = '';
  emailTwo: string = '';
  attendance: string = 'yes';
  loading: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    console.log('RSVP Component Initialized');
  }

  @Output() close = new EventEmitter<void>();

  closeModal(): void {
	this.close.emit();
  }

  submitRsvp(): void {
    const rsvpData = {
      name: this.name,
      email: this.email,
      emailTwo: this.emailTwo,
      attendance: this.attendance,
    };

    if (this.email !== this.emailTwo) {
      alert("emails do not match :(");
      return;
    }
    console.log('RSVP Data:', rsvpData);

    console.log('Preparing to send RSVP data:', rsvpData); // Debug: Log the data being sent

  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  this.loading = true; 

  this.http.post('https://party-time-backend.onrender.com/rsvp', rsvpData, httpOptions).subscribe(
    (response) => {
      console.log('RSVP submitted successfully:', response); // Debug: Log the successful response
      alert('RSVP submitted successfully!');
      this.loading = false; 
    },
    (error) => {
      console.error('Error submitting RSVP:', error); // Debug: Log the error response
      alert('There was an error submitting your RSVP. Please try again.');
      this.loading = false;
    }
  );
  }
}
