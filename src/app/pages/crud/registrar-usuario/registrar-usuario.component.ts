import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from 'src/app/models/Usuario.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel();
  constructor() { }

  ngOnInit(): void {
  }

  registrarUsuario(forma: NgForm)
  {
    console.log('Se registro correctamente');
    console.log(this.usuario);
    // forma.reset();
    console.log(forma.invalid);
    Swal.fire
    ({
      icon: "success",
      text: "Se registró el usuario exitosamente"
    });
  }

  limpiarForma(forma: NgForm)
  {
    forma.reset();
  }

}
