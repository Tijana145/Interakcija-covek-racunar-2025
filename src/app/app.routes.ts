import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './login/login';
import { About } from './about/about';
import { Signup } from './signup/signup';
import { Details } from './details/details';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'about', component: About},
    {path: 'login', component: Login},
    {path: 'signup', component: Signup},
    {path: 'details/:id', component: Details},
    {path: '**' , redirectTo: ''} 

];
