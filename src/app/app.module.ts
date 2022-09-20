import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoursesComponent } from 'src/courses.component';
import { CoursesService } from 'src/courses.service';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './authors.service';
import { FormsModule } from '@angular/forms';
import { SummaryPipe } from 'src/summary.pipe';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { PostsComponent } from './posts/posts.component';
import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';
import { MatComponentsModule } from './mat-components/mat-components.module';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCasePipe } from './title-case.pipe';
import { PostsCompleteIndexComponent } from './posts-complete/posts-complete-index/posts-complete-index.component';
import { PostsCompleteFormComponent } from './posts-complete/posts-complete-form/posts-complete-form.component';
import { PostsCompleteEditComponent } from './posts-complete/posts-complete-edit/posts-complete-edit.component';
import { PostsCompleteCreateComponent } from './posts-complete/posts-complete-create/posts-complete-create.component';



@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
    SummaryPipe,
    ContactFormComponent,
    CourseFormComponent,
    PostsComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    TeamComponent,
    ContactComponent,
    FavoriteComponent,
    TitleCasePipe,
    PostsCompleteIndexComponent,
    PostsCompleteFormComponent,
    PostsCompleteEditComponent,
    PostsCompleteCreateComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,  
    ReactiveFormsModule,
    MatComponentsModule,  
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'our-team',
        component: TeamComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'posts',
        component: PostsComponent
      },
      {
        path: 'posts-complete',
        component: PostsCompleteIndexComponent
      }
    ]),
    BrowserAnimationsModule
  ],
  providers: [
    CoursesService,
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
