import { CommonModule } from '@angular/common';
import { Component, ViewContainerRef, EnvironmentInjector} from '@angular/core';
import { RsvpComponent } from '../rsvp/rsvp.component';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: true,
  imports: [RsvpComponent, CommonModule],
})
export class HomeComponent {

  main_words = "toronto and it's completely different but also still toronto"
  words_two = "i'm leaving so i'm throwing a party"
  words_three = "date, time, and rsvp"
  rsvp = RsvpComponent

  is_modal_visible = false;
  
  openModal() {
    this.is_modal_visible = true;
  }

  hideModal() {
    this.is_modal_visible = false;
    }
}

