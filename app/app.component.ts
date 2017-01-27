import { Component } from '@angular/core';
import { User } from './shared/models/user';

@Component({
    selector:"my-app",
    template:`
<header>
    <nav class="navbar navbar-inverse">
        <div class="navbar-header">
            <a href="/" class="navbar-brand">My Angular 2 App!</a>
        </div>
    </nav>
<header>

<main>

    <div class="row">
        <div class="col-sm-4">
           <div *ngIf="users">
               <ul class="list-group users-list">
                   <li class="list-group-item" *ngFor="let user of users"
                    (click)="selectUser(user)"
                    [class.active]="user === activeUser"
                    >
                       {{ user.name }} - ({{user.username}})
                   </li>
               </ul>
           </div>
        </div>
        <div class="col-sm-8">
            <div class="jumbotron" *ngIf="activeUser">
                <!--<h1>Welcome to our APP!</h1>-->
                <!--<p>{{ message }}</p>-->
                    <h2>{{ activeUser.name }} <small> {{activeUser.username}}</small></h2>
            </div>

            <div class="jumbotron" *ngIf="!activeUser">
                <span class="glyphicon glyphicon-hand-left"></span>
                <h2>Choose a User</h2>
            </div>
        </div>
    </div>

    <!--<p>The user is {{ user.name }} ({{user.username}}).</p>-->

</main>

<footer class="text-center">
    Copyright &copy; 2017
</footer>
    `,
    styles:[`
      .jumbotron {box-shadow: 0 2px 0 rgba(0,0,0,0.2)}
      .users-list li { cursor: pointer; }
      .jumbotron .glyphicon { font-size:80px;}
    `]

})

export class AppComponent{
    message: string = 'Hello!';
    users: User[] = [
             { id: 1, name: 'Andre', username: 'ap080221063'},
             { id: 2, name: 'Bruno', username: 'br080321123'},
             { id: 3, name: 'Hugo', username: 'hg080244455'}
            ];
    activeUser: User;

    selectUser(user){
        this.activeUser = user;
        console.log(this.activeUser);
    }
}
