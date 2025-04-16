import { Component, inject, Input, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ContactArrayService } from '../contact-array.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-edit-contact',
  imports: [FormsModule, RouterLink],
  templateUrl: './edit-contact.component.html',
  styleUrl: './edit-contact.component.css'
})
export class EditContactComponent {

  
  index = input.required<number>()
  contactService = inject(ContactArrayService);

  contact!:Contact;

  firstname:string = '';
  lastname:string = '';
  number:string = '';
  email:string = ''
  
  ngOnInit() {
    this.contact = this.contactService.getContact(this.index());
    this.firstname = this.contact.firstname;
    this.lastname = this.contact.lastname;
    this.number = this.contact.number;
    this.email = this.contact.email;
  }

  editContact() {
    this.contactService.editContact(this.firstname, this.lastname, this.number, this.email, this.index());
  }
}
