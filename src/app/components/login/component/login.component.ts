import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {  GoogleAuthProvider } from 'firebase/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private afAuth: AngularFireAuth) {
  }

  loginWithGoogle() {
    this.afAuth.signInWithRedirect(new GoogleAuthProvider())
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  }

}
