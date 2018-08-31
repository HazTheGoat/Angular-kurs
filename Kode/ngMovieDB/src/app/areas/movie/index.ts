import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MovieListModule } from "./movie-list";
import { MovieDetailsModule } from "./movie-details";
import { MovieRoutesModule } from "./movie.routes";

@NgModule({
  imports: [
    CommonModule,
    MovieListModule,
    MovieDetailsModule,
    MovieRoutesModule],
  exports: [MovieListModule],
  declarations: []
})
export class MovieModule {}

