import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  url: any;

  constructor(private readonly http: HttpClient) {}

    // getUsuarios(){
    //   this.http.get(`${this.url}`);
    // }

    // postUsuarios(){
    //   this.http.post(`${this.url}`, );
    // }

    // putUsuarios(){
    //   this.http.put(`${this.url}`, );
    // }

    // deleteUsuarios(){
    //   this.http.delete(`${this.url}`);
    // }
}
