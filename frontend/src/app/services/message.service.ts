import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from './../models/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(
    private http: HttpClient
  ) { } 

  // message: Message = {
  //   message: '',
  //   status: 'draft'
  // };

    // async all() {
    //   const res = await fetch('http://localhost:3000/messages')
    //   const data = await res.json();

    //   this.messages = data.messages.map((message: any) => new Message(message.text, message.status));
    // }

    // async add(message: Message) {
    //   this.messages.push(message);
    // }

    sendMessage(message: Message) {
      return this.http.post<Message>('http://localhost:3000/messages', message)
    }

    getMessages() {
      return this.http.get('http://localhost:3000/messages')
    }

}
