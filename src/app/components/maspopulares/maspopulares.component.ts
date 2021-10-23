import { Component, OnInit } from '@angular/core';
import { MoviedbService } from '../../services/moviedb.service';
@Component({
  selector: 'app-home',
  templateUrl: './maspopulares.component.html',
  styleUrls: ['./maspopulares.component.css']
})
export class MaspopularesComponent {

  masPopulares: any[] = [];
  loading: boolean;

  constructor(private moviedb: MoviedbService) {

    this.loading = true;

    this.moviedb.getMasPopulares()
      .subscribe((data: any) => {

        console.log(data);
        this.masPopulares = data;
        this.loading = false;
      });

  }


}
