import { Component, inject, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EditContactComponent } from "../edit-contact/edit-contact.component";
import { ContactArrayService } from '../contact-array.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact-card',
  imports: [RouterLink, EditContactComponent],
  templateUrl: './contact-card.component.html',
  styleUrl: './contact-card.component.css'
})
export class ContactCardComponent {
  contactService = inject(ContactArrayService);

  @Input() contact!: Contact;
  @Input() index!:number;

  delete() {
    this.contactService.deleteContact(this.index);
  }
}
