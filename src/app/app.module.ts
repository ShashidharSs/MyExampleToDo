import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, ActivatedRoute} from '@angular/router';
import { FormsModule,FormControl,FormGroup,Validator,FormBuilder, ReactiveFormsModule, Validators, NgForm  } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService} from './shared/auth.service';
import { UserService} from './shared/user.service';
import { TodoService} from './shared/todo.service';
import { User} from './shared/user.model';
import { AuthGuard } from './guards/auth.guard';
import { fakeBackendProvider } from './_helpers/fake-backend';


import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { appRoutes } from './routes';
import { ToastrModule } from 'ngx-toastr';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { HomeComponent } from './home/home.component';
import { SocialloginComponent } from './sociallogin/sociallogin.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodoresultComponent } from './todoresult/todoresult.component';
import { RegusersComponent } from './regusers/regusers.component';



@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    RegistrationComponent,
    DashbordComponent,
    HomeComponent,
    SocialloginComponent,
    TodolistComponent,
    TodoresultComponent,
    RegusersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
   ToastrModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [AuthGuard,AuthService,UserService,TodoService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
  },

  // provider used to create fake backend
  fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
