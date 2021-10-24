import { Component, OnInit, Input } from "@angular/core";
import { MoviedbService } from "../../services/moviedb.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent {
  @Input() datoEntrante: string;
  peliculas: any[] = [];

  constructor(private moviedb: MoviedbService) {}

  buscar(termino: string) {
    console.log(termino);

    this.moviedb.getBusquedaPeliculas(termino).subscribe((data: any) => {
      console.log(data);

      this.peliculas = data;
    });
  }
}
