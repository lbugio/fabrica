import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'}
)
export class ContactService {

  telas: Contact[];
  
  _contactList: Contact[] = [];

  readonly URL_API = 'http://localhost:3000/api/telas';

  constructor(private http: HttpClient) { }

  addContact(contact: Contact) {
    contact.ID = this._contactList.length + 1;
    this._contactList.push(contact);
  }

  editContact(contact: Contact) {
    const index = this._contactList.findIndex(c => c.ID === contact.ID);
    this._contactList[index] = contact;
  }

  deleteContact(id: number) {
    const contact = this._contactList.findIndex(c => c.ID === id);
    this._contactList.splice(contact, 1);
  }

  getAllContacts() {
    return this._contactList;
    
  }

  getTelas() {
    return this.http.get(this.URL_API);
    }

    postTela(contact: Contact) {
      return this.http.post(this.URL_API, contact)
  }
}
