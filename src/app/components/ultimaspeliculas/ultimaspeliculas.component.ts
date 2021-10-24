import { Component, OnInit } from '@angular/core';
import { MoviedbService } from '../../services/moviedb.service';
@Component({
  selector: 'app-ultimaspeliculas',
  templateUrl: './ultimaspeliculas.component.html',
  styleUrls: ['./ultimaspeliculas.component.css']
})
export class UltimaspeliculasComponent {

  nuevasPeliculas: any[] = [];

  constructor(private moviedb: MoviedbService) {

    this.moviedb.getUltimasPeliculas()
      .subscribe((data: any) => {

        console.log(data);
        this.nuevasPeliculas = data;
      });

  }


}
