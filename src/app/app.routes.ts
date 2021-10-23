import { Routes } from "@angular/router";
import { UltimaspeliculasComponent } from "./components/ultimaspeliculas/ultimaspeliculas.component";
import { SearchComponent } from "./components/search/search.component";
import { PeliculaComponent } from "./components/pelicula/pelicula.component";
import { MejorcalificadasComponent } from "./components/mejorcalificadas/mejorcalificadas.component";
import { MaspopularesComponent } from "./components/maspopulares/maspopulares.component";

export const ROUTES: Routes = [
  { path: "", component: UltimaspeliculasComponent },
  { path: "ultimaspeliculas", component: UltimaspeliculasComponent },
  { path: "mejorcalificadas", component: MejorcalificadasComponent },
  { path: "maspopulares", component: MaspopularesComponent },
  { path: "search", component: SearchComponent },
  { path: "pelicula/:id", component: PeliculaComponent }
];
