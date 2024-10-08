import { Component, inject } from '@angular/core';
import { FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  #apiService = inject(ApiServiceService)
  isMessageSent: boolean = false
  contactForm: FormGroup = new  FormGroup({
      name: new FormControl ("", [Validators.required]),
      email: new FormControl ("", [Validators.email]),
      contact: new FormControl ("", [Validators.required]),
      topic: new FormControl ("", [Validators.required]),
      message: new FormControl ("", [Validators.required])
  })
  send(){
    if (this.contactForm.valid) {
      this.isMessageSent =true;
      const randomString = this.generateRandomString(10);
      this.#apiService.sendMessage({...this.contactForm.value, "id":randomString, "contact":this.contactForm.value.contact.toString()}).subscribe(res=>{
      })
    } else {
      console.log('Form Invalid');
    }
  }
   generateRandomString(length:any) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

}
