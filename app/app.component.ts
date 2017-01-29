import { Component } from '@angular/core';
import { User } from './shared/models/user';

@Component({
    selector:"my-app",
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css']

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

    onUserCreated(event){
        console.log(event);
        this.users.push(event.user);
    }
}
