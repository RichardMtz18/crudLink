import { Component, Input, OnInit } from '@angular/core';
import { UsuariosService } from '../../../services/usuarios.service';
import { UsuarioModel } from '../../../models/Usuario.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-actualizar-usuario',
  templateUrl: './actualizar-usuario.component.html',
  styleUrls: ['./actualizar-usuario.component.css']
})
export class ActualizarUsuarioComponent implements OnInit {

  @Input() idUsuario: string = "";
  usuario: UsuarioModel = new UsuarioModel();

  constructor(private readonly UsuariosService: UsuariosService) { }

  ngOnInit(): void {
    console.log(this.idUsuario);
    this.UsuariosService.getUsuario(this.idUsuario)
    .then((response: any) => {
      this.usuario = response.cont.usuario;
    })
    .catch(() => {});
  }

  actualizarUsuario(forma: NgForm){

  }

  limpiarForma(forma: NgForm)
  {
    forma.reset();
  }

}
