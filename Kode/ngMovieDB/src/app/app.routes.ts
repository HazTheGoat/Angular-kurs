import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MovieListComponent } from "./areas/movie/movie-list/movie-list.component";

const appRoutes: Routes = [
  { path: "", component: MovieListComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutesModule {}
