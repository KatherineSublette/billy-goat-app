import { Component, OnInit } from '@angular/core';
import { Guest } from 'src/app/models/guest.model';
import { Guide } from 'src/app/models/guide.model';
import { Message } from 'src/app/models/message.model';
import { User } from 'src/app/models/user.model';
import { GuestService } from 'src/app/services/guest.service';
import { GuideService } from 'src/app/services/guide.service';
import { MessageService } from 'src/app/services/message.service';
import { UserService } from 'src/app/services/user.service';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-messages-page',
  templateUrl: './messages-page.component.html',
  styleUrls: ['./messages-page.component.css']
})
export class MessagesPageComponent implements OnInit {
  private messages: Message[] = [];
  private jwtUser: User = JSON.parse(sessionStorage.getItem("user"));
  private user: User;
  private guide: Guide;
  private guest: Guest;

  private body: string = "No current messages";;
  private subject: string;
  private date: Date = new Date();
  private sender: User = new User();

  private recipientEmail: string;
  private newSubject: string;
  private newBody: string;

  private isNewMessage: boolean = false;
  private isReply: boolean = false;
  constructor(private messageServce: MessageService,
    private userService: UserService,
    private toastr: ToastrService) { 
    this.user = JSON.parse(this.jwtUser.user);
  }

  ngOnInit(): void {
    let filter = "?recipientId=" + this.user.id.toString();
    this.messageServce.getMessages(filter).subscribe(
      (messages: Message[]) => {
        this.messages = messages
      }
    );
  }

  onClick(message: Message): void{
    this.body = message.body;
    this.subject = message.subject;
    this.date = message.date;
    this.sender = message.sender;
  }

  onReply(){
    this.isReply = true;
  }

  onNewMessage(){
    this.isNewMessage = true;
  }

  onSend(){
    let message = new Message();
    if(this.newSubject == undefined){
        this.newSubject = this.subject;
    }
    if(this.recipientEmail == undefined){
      this.recipientEmail = this.sender.email;
    }

    let recipient = new User();
    //get recipient user from email
    let filter = "?email=" + this.recipientEmail;
    this.userService.getUsers(filter).subscribe(
      (user: User[]) => {
        recipient = user[0];
        message.recipientId = recipient.id;
        //make new message with all our things
        message.body = this.newBody
        message.subject = this.newSubject;
        message.date = new Date();
        message.senderId = this.user.id;
        this.messageServce.addMessage(message).subscribe(
          (addedMessage: Message) => {
            this.toastr.success('message sent successfully');
          },
          (error) => {
            this.toastr.error('Error sending message');
          }
    )
      }
    );
    this.isNewMessage = false;
    this.isReply = false;
  }

}
