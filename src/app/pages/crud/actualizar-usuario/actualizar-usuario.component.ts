import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsuariosService } from '../../../services/usuarios.service';
import { UsuarioModel } from '../../../models/Usuario.model';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-usuario',
  templateUrl: './actualizar-usuario.component.html',
  styleUrls: ['./actualizar-usuario.component.css']
})
export class ActualizarUsuarioComponent implements OnInit {

  @Input() idUsuario: string = "";
  usuario: UsuarioModel = new UsuarioModel();
  @Output() emitirActualizacion: EventEmitter<any> = new EventEmitter();

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
    this.UsuariosService.putUsuarios(this.usuario, this.idUsuario)
    .then((response: any) => {
      Swal.fire
      ({
        icon: "success",
        text: "Se actualizó el usuario exitosamente"
      });
      this.emitirActualizacion.emit();
    })
    .catch((error: any) => {
      Swal.fire
      ({
        icon: "error",
        text: "Ha habido un error al actualizar el usuario"
      });
    });
  }

  limpiarForma(forma: NgForm)
  {
    forma.reset();
  }

}
