import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  showLoginForm:boolean = true;

  constructor(private fb: FormBuilder) {
  }

  loginForm = this.fb.group({
    tipoDocumento: ['', Validators.required],
    numeroDocumento: ['', Validators.required],
    clave: ['', Validators.required],
  })

  registerForm = this.fb.group({
      tipoDocumentoR: ['', Validators.required], // Use unique formControlName
      numeroDocumento: ['', Validators.required], // Use unique formControlName
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', Validators.required],
      claveR: ['', Validators.required], // Use unique formControlName
      confirmarClave: ['', Validators.required],
  })

  onSubmit(){

  }

 toggleForm() {
   this.showLoginForm = !this.showLoginForm;
  }
}
