import { MovieListComponent } from "./movie-list.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MovieCardModule } from "../movie-card";

@NgModule({
  imports: [CommonModule, MovieCardModule],
  declarations: [MovieListComponent],
  exports: [MovieListComponent]
})
export class MovieListModule {}
