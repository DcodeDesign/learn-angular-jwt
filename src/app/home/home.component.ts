import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  readonly API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  public signIn(): void {
    this.http.get(this.API_URL + '/token/sign')
      .subscribe(
        (res: any) => {
          console.log(res);
          if (res.token) {
            console.log(res.user);

            // token here is stored in a local storage
            localStorage.setItem('token', res.token);
          }
        },
        (err) => {
          console.log(err);
        }
      );
  }

  public getPath(): void {
    // path1 is then requested
    this.http.get(this.API_URL + '/path1')
      .subscribe(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
