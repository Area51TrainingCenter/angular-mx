import { Component, OnInit } from '@angular/core';
import {
  Http,
  Response,
  Headers,
  RequestOptions
} from '@angular/http';

@Component({
  selector: 'app-simple-http',
  templateUrl: './simple-http.component.html',
  styleUrls: ['./simple-http.component.css']
})
export class SimpleHttpComponent implements OnInit {
  data: Object;
  loading: boolean;

  constructor(private http: Http) { }

  ngOnInit() {
    // this.makeRequest()
  }

  makeHeaders() {
    const headers: Headers = new Headers();
    headers.append('x-access-token', '1234567890');
    headers.append('myCors', '*');

    const opts: RequestOptions = new RequestOptions();
    opts.headers = headers;

    this.http.get('http://jsonplaceholder.typicode.com/posts/1', opts)
      .subscribe(
      result => {
        this.data = result.json();
        this.loading = false;
      }
      )
  }

  makeDelete(): void {
    this.loading = true;
    this.http
      .delete(
      'http://jsonplaceholder.typicode.com/posts/1'
      )
      .subscribe(
      result => {
        this.data = result.json();
        this.loading = false;
      },
      error => { console.log(error) }
      )
  }

  makePost(): void {
    this.loading = true;
    this.http
      .post(
      'http://jsonplaceholder.typicode.com/posts',
      JSON.stringify({
        body: 'bar',
        title: 'Mi titulo',
        userId: 3
      })
      )
      .subscribe(
      result => {
        this.data = result.json();
        this.loading = false;
      },
      error => { console.log(error) }
      )
  }

  makeRequest(): void {
    this.loading = true;
    this.http
      .request('http://jsonplaceholder.typicode.com/posts/1')
      //.get('http://jsonplaceholder.typicode.com/posts/1')
      .subscribe(
      result => {
        this.data = result.json();
        this.loading = false;
      },
      error => { console.log(error) }
      )
  }

}