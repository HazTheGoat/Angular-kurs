import { CommentModel } from './../comment/models/comment';
import { CommentService } from './../services/comment.service';
import { MovieModel } from "./../models/movie";
import { MovieService } from "./../services/movie.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "movie-details",
  templateUrl: "./movie-details.component.html"
})
export class MovieDetailsComponent implements OnInit {
  movieId: string;
  movie: MovieModel;
  comments: CommentModel[];

  constructor(
    private movieService: MovieService,
    private commentService: CommentService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.getMovieIdInUrl();
  }

  getMovieIdInUrl() {
    this.activatedRoute.params.subscribe(result => {
      this.movieId = result.id;
      this.getMovieById();
      this.getComments();
    });
  }

  getComments() {
    this.comments = this.commentService.getCommentsByMovieId(this.movieId);
  }

  getMovieById() {
    this.movie = this.movieService.getMovieById(this.movieId);
  }

  handleBack() {
    this.router.navigateByUrl("/");
  }
}
