import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from 'src/app/Models/UserModel';
import { FormControl, FormGroup, FormBuilder, FormArray  } from '@angular/forms';
import { unwrapResolvedMetadata } from '@angular/compiler';
import { ToastrService } from 'ngx-toastr';
import { LoadingScreenService } from '../../services/loading-screen.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  miFormulario: FormGroup;
  flag = false;
  users: any[] = [];

  constructor(private userService: UserService, private fb: FormBuilder,
    private toastr: ToastrService, private screenService: LoadingScreenService) {

   }

  ngOnInit() {

    this.miFormulario = this.fb.group({
        email: [''],
        nombre: [''],
        apellido: [''],
        date: [''],
        telefonos: this.fb.array([this.fb.group({telefono: ['']})])
    });

  }

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
    this.toastr.error('Hello world!', 'Toastr ERROR!');
  }

  onSubmit(formValue: any) {

    const user = new User();
    user.nombre = formValue.nombre;
    user.apellido = formValue.apellido;
    user.email = formValue.email;
    user.date = new Date(formValue.date.year, formValue.date.month, formValue.date.day);
    user.telefonos = formValue.telefonos;

    this.userService.adduser(user);

    this.flag = !this.flag;

    this.userService.getUsers()
      .subscribe((resp: any) => {
        this.showSuccess();
        this.users = resp;
      });
  }

  get getTelefonos() {
     return this.miFormulario.get('telefonos') as FormArray;
  }

  addTelefono() {
    const control = <FormArray>this.miFormulario.controls['telefonos'];
    control.push(this.fb.group({telefono: []}));
  }

  removeTelefono(index: number) {
    const control = <FormArray>this.miFormulario.controls['telefonos'];
    control.removeAt(index);
  }

}
