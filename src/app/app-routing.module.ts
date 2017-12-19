import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { PostsComponent } from './posts/posts.component';
import { PersonalComponent } from './personal/personal.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'projects', component: ProjectsComponent, pathMatch: 'full'},
  {path: 'posts', component: PostsComponent, pathMatch: 'full'},
  {path: 'personal', component: PersonalComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
