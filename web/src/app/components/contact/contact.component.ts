import { Component,Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  subject: string = '';
  message: string = '';

  constructor(@Inject(HttpClient) private http: HttpClient) {}
  
  onSubmit() {
    const formData = {
      name: this.name,
      email: this.email,
      subject: this.subject,
      message: this.message
    };

    this.http.post('/api/contact', formData).subscribe(
      (      response: any) => {
        console.log('Success!', response);
      },
      (error: any) => {
        console.error('Error', error);
      }
    );
  }

}
