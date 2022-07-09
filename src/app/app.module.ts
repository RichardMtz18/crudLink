import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudComponent } from './pages/crud/crud.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { RegistrarUsuarioComponent } from './pages/crud/registrar-usuario/registrar-usuario.component';
import { ActualizarUsuarioComponent } from './pages/crud/actualizar-usuario/actualizar-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    CrudComponent,
    LandingPageComponent,
    RegistrarUsuarioComponent,
    ActualizarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
