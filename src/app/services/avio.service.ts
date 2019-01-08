import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Avio} from '../models/avio'

@Injectable({
  providedIn: 'root'
})
export class AvioService {

  selectedAvio: Avio;
  avios: Avio [];
  readonly URL_API = 'http://localhost:3000/api/avios';

  constructor(private http: HttpClient) {
    this.selectedAvio = new Avio();
   }

  getAvios() {
    return this.http.get(this.URL_API);
    }

  postAvio(Avio: Avio) {
      return this.http.post(this.URL_API, Avio)
  }

  putAvio(avio: Avio) {
    return this.http.put(this.URL_API + `/${avio._id}`, avio);
  }

  deleteAvio(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }

  


}
