import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component'; // import the Home component
import { AboutComponent } from './components/about/about.component'; // import the About component
import { PortfolioComponent } from './components/portfolio/portfolio.component'; // import the Portfolio component
import { BlogListComponent } from './components/blog/blog.component'; // import the Blog component
import { ContactComponent } from './components/contact/contact.component'; // import the Contact component

const routes: Routes = [
{ path: '', component: HomeComponent }, // set Home component as the default route
{ path: 'home', component: HomeComponent }, // add Home component route
{ path: 'about', component: AboutComponent }, // add About component route
{ path: 'portfolio', component: PortfolioComponent }, // add Portfolio component route
{ path: 'blog', component: BlogListComponent }, // add Blog component route
{ path: 'contact', component: ContactComponent }, // add Contact component route
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }

