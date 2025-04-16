import { Injectable } from '@angular/core';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactArrayService {

  contacts = [
    {
      firstname: 'Billy',
      lastname: 'Bob',
      number: '123-4567',
      email: 'bb@gsnail.com'
    },
    {
      firstname: 'John',
      lastname: 'Smith',
      number: '310-3490',
      email: 'johns123@gsnail.com'
    }
  ]
  
  constructor() { }

    addContact(firstname:string, lastname:string, number:string, email:string) {
      this.contacts.push({firstname,lastname,number,email});
    }
    editContact(firstname:string, lastname:string, number:string, email:string,index:number) {
      this.contacts[index].firstname = firstname;
      this.contacts[index].lastname = lastname;
      this.contacts[index].number = number;
      this.contacts[index].email = email;
    }
    getContact(index:number) {
      return this.contacts[index];
    }
    
    deleteContact(index:number) {
      this.contacts.splice(index, 1);
    }
}
