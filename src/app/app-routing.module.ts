import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { BaseLayoutComponent } from './components/base-layout/base-layout.component';
import { EducationComponent } from './components/education/education.component';
import { HardwareComponent } from './components/hardware/hardware.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { SkillsComponent } from './components/skills/skills.component';

const routes: Routes = [
  {
    path: '*',
    component: BaseLayoutComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about-me',
    component: AboutMeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'skills',
    component: SkillsComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'education',
    component: EducationComponent
  },
  {
    path: 'questions',
    component: QuestionsComponent
  },
  {
    path: 'hardware',
    component: HardwareComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
