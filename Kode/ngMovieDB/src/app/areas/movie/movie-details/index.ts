import { MovieDetailsComponent } from "./movie-details.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CommentModule } from "../comment";

@NgModule({
  imports: [CommonModule, CommentModule],
  declarations: [MovieDetailsComponent],
  exports: [MovieDetailsComponent]
})
export class MovieDetailsModule {}
