import { Component, EventEmitter, Output, output } from '@angular/core';
import { ContactArrayService } from '../contact-array.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  imports: [FormsModule, RouterLink],
  templateUrl: './add-contact.component.html',
  styleUrl: './add-contact.component.css'
})
export class AddContactComponent {

  constructor( private contactService:ContactArrayService ) {

  }
  
  firstname:string = '';
  lastname:string = '';
  number:string = '';
  email:string = '';
  
  addContact() {
    this.contactService.addContact(this.firstname, this.lastname, this.number, this.email);
  }
}
