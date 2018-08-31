import { MovieModel } from "./../models/movie";
import { MovieService } from "./../services/movie.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.css"]
})
export class MovieListComponent implements OnInit {
  movies: MovieModel[];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.movies = this.movieService.getMovies();
  }
}
