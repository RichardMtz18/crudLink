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
  idUsuario: string = "";

  constructor(private UsuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios(){
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

  isShown: boolean = false;

toggleShow(idUsuario: any){
  this.idUsuario = idUsuario;
  this.isShown= true;
}

  restableceRegistro(){
    this.isShown = false;
    this.obtenerUsuarios();
  }

  eliminar(usuario: UsuarioModel){
    Swal.fire({
      icon: "question",
      title: `¿Estas seguro que deseas eliminar a ${usuario.strNombre} ${usuario.strPrimerApellido} ${usuario.strSegundoApellido}?`,
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: 'Si, estoy seguro',
      denyButtonText: `Don't save`,
      cancelButtonText: "Cancelar"
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.UsuariosService.deleteUsuarios(usuario._id)
        .then((response: any) => {
          Swal.fire
          ({
            icon: "success",
            text: "Se elimino el usuario exitosamente"
          });
          this.obtenerUsuarios();
        })
        .catch((error: any) => {
          Swal.fire
          ({
            icon: "error",
            text: "Ha habido un error al eliminar el usuario"
          });
        })
      }
    })
  }
}
