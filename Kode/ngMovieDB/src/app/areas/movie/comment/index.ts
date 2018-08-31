import { CommentComponent } from "./comment.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [CommonModule],
  declarations: [CommentComponent],
  exports: [CommentComponent]
})
export class CommentModule {}
