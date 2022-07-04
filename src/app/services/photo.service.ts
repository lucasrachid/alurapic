import {HttpClient} from "@angular/common/http";
import {Photos} from "../models/photos";
import {Injectable} from "@angular/core";

const API = 'http://localhost:3000';

@Injectable({providedIn: 'root'})
export class PhotoService {


  constructor(private http: HttpClient) {
    this.http = http;
  }

  listFromUser(userName: string) {
    return this.http
      .get<Photos[]>(API + '/flavio/photos');
  }
}
