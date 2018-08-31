import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MovieDetailsComponent } from "./movie-details/movie-details.component";

const movieRoutes: Routes = [
  {
    path: "movie",
    children: [
      { path: ":id", component: MovieDetailsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(movieRoutes)],
  exports: [RouterModule]
})
export class MovieRoutesModule {}
