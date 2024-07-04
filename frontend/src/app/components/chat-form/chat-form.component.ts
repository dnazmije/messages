import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatButtonModule} from '@angular/material/button'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessageService } from '../../services/message.service';
import { Message } from '../../models/message'
import { HttpClientModule } from '@angular/common/http';
import { ENV } from '../../env';

@Component({
  selector: 'app-chat-form',
  standalone: true,
  imports: [ 
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    MessageService
  ],
  templateUrl: './chat-form.component.html',
  styleUrl: './chat-form.component.css'
})
export class ChatFormComponent {

  constructor(
    private messageService: MessageService
  ) {  }

  messageStatus = 'draft';

  messagePost: Message = {
    message: '',
    user: ENV.USER
  }

  sendMessage(messageForm: any) {
    this.messagePost.message = messageForm.value.message;
    // send message
    this.messageService.sendMessage(this.messagePost).subscribe((response: any) => {
      // change status based on response
      if (response.code === 200) {
         this.messageStatus = 'sent'
      } else {
        this.messageStatus = 'failed';
      }
      //clear the message field
      messageForm.reset();
    });


  }

}
