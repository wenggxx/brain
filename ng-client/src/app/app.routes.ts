import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ShowNewsComponent } from './pages/show-news/show-news.component';
import { AboutComponent } from './pages/about/about.component';
import { TriviaComponent } from './pages/trivia/trivia.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'news/:id', component: ShowNewsComponent },
  { path: 'trivia', component: TriviaComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '' }
];