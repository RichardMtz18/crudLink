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
       return lastValueFrom(this.http.get(`${this.url}`, {params: {matricula: this.matricula}}));
     }

     getUsuario(idUsuario: string){
      return lastValueFrom(this.http.get(`${this.url}/${idUsuario}`, {params: {matricula: this.matricula}}));
     }

     postUsuario(usuario: UsuarioModel){
       return lastValueFrom(this.http.post(`${this.url}`, usuario, {params: {matricula: this.matricula}}));
     }

     putUsuarios(usuario: UsuarioModel, idUsuario: string){
       return lastValueFrom(this.http.put(`${this.url}/${idUsuario}`, usuario, {params: {matricula: this.matricula}}));
     }

     deleteUsuarios(idUsuario: any){
      return lastValueFrom(this.http.delete(`${this.url}/${idUsuario}`, {params: {matricula: this.matricula}}));
    }
}
