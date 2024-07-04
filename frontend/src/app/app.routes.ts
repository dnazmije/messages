import { Routes } from '@angular/router';
import { ChatFormComponent } from './components/chat-form/chat-form.component';
import { LoginComponent } from './auth/login/login.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'messages', component: ChatFormComponent },
    {
        path: 'login', component: LoginComponent
    }
  ];
