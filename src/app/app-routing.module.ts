import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContadorComponent } from './contador/contador.component';
import { VariableComponent } from './variable/variable.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';

const routes: Routes = [
  {
    path: 'contador',
    component: ContadorComponent
  },
  {
    path: 'variable',
    component: VariableComponent
  },
  {
    path: 'cursos',
    component: CoursesComponent
  },
  {
    path: 'cursos/:course',
    component: CourseDetailComponent
  },
  {
    path: '',
    redirectTo: '/contador',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
