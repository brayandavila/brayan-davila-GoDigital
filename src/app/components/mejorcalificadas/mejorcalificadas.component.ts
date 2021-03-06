import { Component, OnInit } from '@angular/core';
import { MoviedbService } from '../../services/moviedb.service';
@Component({
  selector: 'app-mejorcalificadas',
  templateUrl: './mejorcalificadas.component.html',
  styleUrls: ['./mejorcalificadas.component.css']
})
export class MejorcalificadasComponent {

  mejorCalificadas: any[] = [];

  constructor(private moviedb: MoviedbService) {

    this.moviedb.getMejorCalificadas()
      .subscribe((data: any) => {

        console.log(data);
        this.mejorCalificadas = data;
      });

  }


}
