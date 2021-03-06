import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from "./app.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { HeaderComponent } from "./header/header.component";
import { routing } from "./app.routing";
import { ErrorComponent } from "./errors/error.component";
import { ErrorService } from "./errors/error.service";
import { MessageModule } from './messages/message.module';
import { AuthModule } from "./auth/auth.module";
import { AuthService } from "./auth/auth.service";


@NgModule({
    declarations: [
        AppComponent,
        AuthenticationComponent,
        HeaderComponent,
        ErrorComponent
    ],
    imports: [
        BrowserModule,
        routing,
        HttpModule,
        MessageModule,
        AuthModule
      ],
    providers: [
        ErrorService,
        AuthService
      ],
    bootstrap: [AppComponent]
})
export class AppModule {

}
