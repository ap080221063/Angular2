import { Component } from '@angular/core';

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
    <div class="jumbotron">
        <h1>Welcome to our APP!</h1>
        <p>{{ message }}</p>
    </div>

    <!--<p>The user is {{ user.name }} ({{user.username}}).</p>-->

    <div *ngIf="users">
        <div  *ngFor="let user of users">
            {{ user.name }} - ({{user.username}})
        </div>
    </div>

</main>

<footer class="text-center">
    Copyright &copy; 2017
</footer>
    `,
    styles:[`
      .jumbotron {box-shadow: 0 2px 0 rgba(0,0,0,0.2)}
    `]

})

export class AppComponent{
    message = 'Hello!';
    users = [
             { id: 1, name: 'Andre', username: 'ap080221063'},
             { id: 2, name: 'Bruno', username: 'br080321123'},
             { id: 3, name: 'Hugo', username: 'hg080244455'}
            ]
}
