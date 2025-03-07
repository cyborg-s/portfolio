import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  languageService = inject(LanguageService);
  
  isChecked: boolean = false;

  

  http = inject(HttpClient)

  contactData = {
    name: "",
    email: "",
    message:"",
  }

  isFormValid(): boolean {
    return (this.contactData.name?.trim() || '') !== '' &&
           (this.contactData.email?.trim() || '') !== '' &&
           (this.contactData.message?.trim() || '') !== '' &&
           this.isChecked;
  }
 
  mailTest = true;

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  @ViewChild('succsess', { static: false }) succsess!: ElementRef;

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      this.succsess.nativeElement.classList.remove('none');
      setTimeout(() => {
        this.succsess.nativeElement.classList.add('none');
      }, 800);
      ngForm.resetForm();
    }
  }

}
