import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from 'src/app/models/Usuario.model';
import Swal from 'sweetalert2';
import { UsuariosService } from '../../../services/usuarios.service';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel();
  @Output() emitirRegistro: EventEmitter<any> = new EventEmitter();
  constructor(private readonly UsuariosService: UsuariosService) { }

  ngOnInit(): void {
  }

  registrarUsuario(forma: NgForm)
  {
    this.UsuariosService.postUsuario(this.usuario)
    .then((response: any) => {
      Swal.fire
      ({
        icon: "success",
        text: "Se registró el usuario exitosamente"
      });
      forma.reset();
      this.emitirRegistro.emit();
    })
    .catch((error: any) => {
      Swal.fire
      ({
        icon: "error",
        text: "Ha habido un error al registrar el usuario"
      });
    });
  }

  limpiarForma(forma: NgForm)
  {
    forma.reset();
  }

}
