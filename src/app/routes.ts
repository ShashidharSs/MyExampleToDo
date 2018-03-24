import {Routes} from '@angular/router'
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { TodolistComponent } from './todolist/todolist.component';
import { RegusersComponent } from './regusers/regusers.component';
import { TodoresultComponent } from './todoresult/todoresult.component';




export const appRoutes:Routes=[
    // { path: 'homePage', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'app-login', component: LoginComponent },
    { path: 'registrationPage', component: RegistrationComponent },
    { path: 'dashbordPage1', component: DashbordComponent, canActivate: [AuthGuard] },
   
    {
        path:'homePage', component:HomeComponent,
        children:[
            {
                path:'dashbordPage1', component: DashbordComponent,
              
            },
            {
                 path: 'regUserLink', component: RegusersComponent,
            },
            {
                path:'togolistLink', component: TodolistComponent,
              
            },
            {
                path:'togoresult/:id', component: TodoresultComponent,
              
            },
           
        ],
    },
        {path:'', redirectTo:'/app-login', pathMatch:'full' }
    

]