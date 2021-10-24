import { Component, OnInit } from '@angular/core';
import { MoviedbService } from '../../services/moviedb.service';
@Component({
  selector: 'app-maspopulares',
  templateUrl: './maspopulares.component.html',
  styleUrls: ['./maspopulares.component.css']
})
export class MaspopularesComponent {

  masPopulares: any[] = [];

  constructor(private moviedb: MoviedbService) {

    this.moviedb.getMasPopulares()
      .subscribe((data: any) => {

        console.log(data);
        this.masPopulares = data;
      });

  }


}
