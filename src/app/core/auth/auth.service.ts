import { inject, Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import {
  Auth,
  authState,
  getAuth,
  signInWithPopup,
  signInWithRedirect
} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  firebaseAuth: Auth = inject(Auth);
  provider: firebase.auth.GoogleAuthProvider =
    new firebase.auth.GoogleAuthProvider();

  // private currentUserSubject = new BehaviorSubject<User | null>(null);
  // public currentUser$ = this.currentUserSubject.asObservable();

  // /**
  //  * Constructs an instance of the AuthService class.
  //  * @param router - The router service.
  //  * @param firestore - The Firestore service.
  //  */
  // constructor(
  //   private router: Router,
  //   private firestore: FirestoreService
  // ) {
  //   authState(this.firebaseAuth).subscribe((user) => {
  //     if (user) {
  //       this.currentUserSubject.next(this.user);
  //     } else {
  //       this.currentUserSubject.next(null);
  //     }
  //   });
  //
  //   this.firebaseAuth.onAuthStateChanged(
  //     (user) => (this.activeUserAccount = user)
  //   );
  //
  //   // this.isDesktop = this.matchMedia.checkIsDesktop();
  // }

  // constructor(
  //   private afAuth: AngularFireAuth,
  //   private http: HttpClient
  // ) {}

  googleAuthRedirect(): void {
    const auth = getAuth();
    signInWithRedirect(auth, this.provider).then((r) => console.log(r));
  }

  googleAuthPopup(): void {
    const auth = getAuth();
    signInWithPopup(auth, this.provider).then((r) => console.log(r));
  }

  //
  // async googleLogin(): Promise<void> {
  //   const provider = new firebase.auth.GoogleAuthProvider();
  //   // const credential = await this.afAuth.signInWithPopup(provider);
  //   const credential = await this.afAuth.signInWithRedirect(provider);
  //   // await this.sendTokenToBackend(credential as firebase.User); // Ensure type is correctly cast
  // }
  //
  // async logout(): Promise<void> {
  //   await this.afAuth.signOut();
  // }
  //
  // private async sendTokenToBackend(user: firebase.User | null) {
  //   if (user) {
  //     const idToken = await user.getIdToken();
  //     await firstValueFrom(
  //       this.http.post(`${environment.backendUrl}/api/auth/login`, { idToken })
  //     );
  //   }
  // }
  //
  // getAuthState(): Observable<firebase.User | null> {
  //   return this.afAuth.authState;
  // }
  // getCurrentUser() {
  //   return this.afAuth.currentUser;
  // }
}
