import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  { path: 'search', component: SearchComponent},
  { path: 'profile', component: ProfileComponent},
  { path: '404', component: NotFoundComponent},
  { path: '', redirectTo:'profile', pathMatch:'full'},
  { path: '**', redirectTo:'404', pathMatch:'full'}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
