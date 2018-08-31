import { MovieCardComponent } from "./movie-card.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TruncateModule } from "../../../shared/pipes";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [CommonModule, TruncateModule, RouterModule],
  declarations: [MovieCardComponent],
  exports: [MovieCardComponent]
})
export class MovieCardModule {}
