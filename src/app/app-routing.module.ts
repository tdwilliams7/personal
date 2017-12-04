import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { ProjectsComponent } from "./projects/projects.component"

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'projects', component: ProjectsComponent, pathMatch: 'full'}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
