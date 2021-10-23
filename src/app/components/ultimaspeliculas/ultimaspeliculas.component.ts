import { Component, OnInit } from '@angular/core';
import { MoviedbService } from '../../services/moviedb.service';
@Component({
  selector: 'app-home',
  templateUrl: './ultimaspeliculas.component.html',
  styleUrls: ['./ultimaspeliculas.component.css']
})
export class UltimaspeliculasComponent {

  nuevasPeliculas: any[] = [];
  loading: boolean;

  constructor(private moviedb: MoviedbService) {

    this.loading = true;

    this.moviedb.getUltimasPeliculas()
      .subscribe((data: any) => {

        console.log(data);
        this.nuevasPeliculas = data;
        this.loading = false;
      });

  }


}
