import { moviesDb } from "./../../../../db";
import { MovieModel } from "./../models/movie";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class MovieService {
  private movies: MovieModel[] = moviesDb;

  // Get movie by id
  getMovieById(id: string) {
    return this.movies.find(item => item.id === id);
  }

  // Get movies
  getMovies() {
    return this.movies;
  }

  // Add movie

  // Update movie by id

  // Delete movie by id
}
