import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { SignInModule } from './sign-in/sign-in.module';
import { SongModule } from './song/song.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CoreModule.forRoot(),
    FormsModule,
    HttpModule,
    SharedModule,
    SignInModule,
    SongModule
,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
