import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.scss"],
})
export class MovieListComponent implements OnInit {
  movies: Movie[];
  year: any;
  data: boolean = true;
  ngOnInit() {}

  search() {
    let url = `https://jsonmock.hackerrank.com/api/movies?Year=${this.year}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.data.length == 0) {
          this.data = false;
        } else {
          this.movies = data.data;
          this.data = true;
        }
      })
      .catch(console.log);
  }
}

export interface Movie {
  Title: string;
  Year: number;
  imdbID: number;
}
