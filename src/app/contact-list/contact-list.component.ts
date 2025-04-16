import { Component, inject } from '@angular/core';
import { ContactCardComponent } from "../contact-card/contact-card.component";
import { ContactArrayService } from '../contact-array.service';
import { AddContactComponent } from "../add-contact/add-contact.component";
import { Contact } from '../contact';

@Component({
  selector: 'app-contact-list',
  imports: [ContactCardComponent, AddContactComponent],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent {
  contacts:Contact[] = []

  caService = inject(ContactArrayService);

  constructor() {}

  ngOnInit(): void {
    this.contacts = this.caService.contacts;
  }
}
