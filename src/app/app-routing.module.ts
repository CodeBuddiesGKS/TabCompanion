import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInComponent } from './sign-in/sign-in.component';
import { SongComponent } from './song/song.component';

const routes: Routes = [
  {
    path: '',
    component: SignInComponent
  },
  {
    path: 'song',
    component: SongComponent
  },
  {
    path: '**',
    component: SignInComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
