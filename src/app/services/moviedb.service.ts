import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class MoviedbService {

  private apikey: string = "dbcd308b0db700c3117c5265a4b7692a";
  private urlMoviedb: string = "https://api.themoviedb.org/3";

  constructor(private http: HttpClient) { }
  getQuery(query: string) {
    const url = `https://api.themoviedb.org/3${query}&api_key=${
      this.apikey
      }&language=es&callback=JSONP_CALLBACK`;
    return this.http.jsonp(url, "");
  }

  getQueryforPelicula(query: string) {
    const url = `https://api.themoviedb.org/3${query}?api_key=${
      this.apikey
      }&language=es&callback=JSONP_CALLBACK`;
    return this.http.jsonp(url, "");
  }

  getBusquedaPeliculas(termino: string) {
    return this.getQuery(
      `/search/movie?query=${termino}&sort_by=popularity.desc`
    ).pipe(map((data: any) => data.results));
  }

  getMejorCalificadas() {
    return this.getQuery("/discover/movie?sort_by=vote_count.desc").pipe(
      map((data: any) => data.results));
  }

  getUltimasPeliculas() {
    return this.getQuery("/discover/movie?sort_by=primary_release_date.desc").pipe(
      map((data: any) => data.results));
  }

  getMasPopulares() {
    return this.getQuery("/discover/movie?sort_by=popularity.desc").pipe(
      map((data: any) => data.results));
  }

  getPelicula(id: string) {
    return this.getQueryforPelicula(`/movie/${id}`).pipe(
      map((data: any) => data)
    );
  }

}
