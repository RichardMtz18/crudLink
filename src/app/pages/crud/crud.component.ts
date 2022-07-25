import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/Usuario.model';
import Swal from 'sweetalert2';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  usuarios: UsuarioModel[] = [];

  constructor(private UsuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.UsuariosService.getUsuarios()
    .then((response: any) => {
      this.usuarios = response.cont.usuarios;
      console.log(this.usuarios);
    })
    .catch((error: any) => {
      Swal.fire
      ({
        icon: "error",
        text: error.error.msg
      });
    });
  }

  counter(i:number){
    return new Array(i)
  }

  isShown: boolean = true;

toggleShow(){
  this.isShown= ! this.isShown;
}
}
