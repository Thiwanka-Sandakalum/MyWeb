import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogListComponent implements OnInit {
  blogItems: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // Fetch data from backend API and populate the blogItems array
    this.http.get<any[]>('https://example.com/api/blog')
      .subscribe(response => this.blogItems = response);
  }

  email!: string;

  subscribe() {
    this.http.post('/api/subscribe', { email: this.email })
      .subscribe(
        res => {
          console.log(res);
          alert('Subscription successful!');
        },
        err => {
          console.error(err);
          alert('Subscription failed. Please try again later.');
        }
      );
  }
}