import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';


const firebaseConfig = {
    apiKey: 'AIzaSyBZ8mSjrAsV4MISJqDtJxv6qN6bfvOXLSo',
    authDomain: 'nextstep-todo.firebaseapp.com',
    databaseURL: 'https://nextstep-todo.firebaseio.com',
    projectId: 'nextstep-todo',
    storageBucket: 'nextstep-todo.appspot.com'
};


@NgModule({
  imports: [
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig, 'ng2-todo-app')
  ]
})
export class FirebaseModule {}
