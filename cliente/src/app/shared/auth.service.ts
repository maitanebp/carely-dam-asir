import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import * as moment from "moment";
import { map } from "rxjs/operators";
import { User } from "./user";


@Injectable()
export class AuthService {
    private authUrl = 'https://localhost:8000';

    constructor(private http: HttpClient) {

    }

    login(username: string, password: string) {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this.http.post<User>(this.authUrl + '/login_check', { username, password }, { headers })
            .pipe(
                map(res => this.setSession)
            )
        // .shareReplay();
    }
    register(username: string, password: string) {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this.http.post<User>(this.authUrl + '/register', { username, password }, { headers })
            .pipe(
                map(res => this.setSession)
            );
    }

    private setSession(authResult:any) {
        const expiresAt = moment().add(authResult.expiresIn, 'second');

        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
    }

    logout() {
        localStorage.removeItem("id_token");
        localStorage.removeItem("expires_at");
    }

    public isLoggedIn() {
        return moment().isBefore(this.getExpiration());
    }

    isLoggedOut() {
        return !this.isLoggedIn();
    }

    getExpiration() {
        const expiration = localStorage.getItem("expires_at");
        if(expiration==null){
          return null;
        }else{
          const expiresAt = JSON.parse(expiration);
          return moment(expiresAt);
        }
    }
}
