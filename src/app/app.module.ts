import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { TeachersPageComponent } from './teachers-page/teachers-page.component';
import { AdministatorsPageComponent } from './administators-page/administators-page.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthoPageComponent } from './autho-page/autho-page.component';
import { FormsModule } from '@angular/forms';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:'',component: AuthoPageComponent},
  {path:'app',component: NewsPageComponent},
  {path:'teachers',component: TeachersPageComponent},
  {path:'admin',component: AdministatorsPageComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    NewsPageComponent,
    TeachersPageComponent,
    AdministatorsPageComponent,
    AuthoPageComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
