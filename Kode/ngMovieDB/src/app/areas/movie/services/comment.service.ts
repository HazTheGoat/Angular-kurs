import { CommentModel } from "./../comment/models/comment";
import { commentsDb } from "./../../../../db";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CommentService {
  private comments: CommentModel[] = commentsDb;

  getCommentsByMovieId(movieId) {
    return this.comments.filter(comment => comment.movieId === movieId);
  }
}
