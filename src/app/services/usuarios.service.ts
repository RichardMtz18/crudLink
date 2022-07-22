import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { UsuarioModel } from '../models/Usuario.model';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  url: string = `${environment.baseUrl}/usuario`;
  matricula: string = environment.matricula;

  constructor(private readonly http: HttpClient) {}

     getUsuarios(){
       this.http.get(`${this.url}`);
     }

     postUsuario(usuario: UsuarioModel){
       return lastValueFrom(this.http.post(`${this.url}`, usuario, {params: {matricula: this.matricula}}));
     }

     putUsuarios(){
       
     }

     deleteUsuarios(){
       
    }
}
