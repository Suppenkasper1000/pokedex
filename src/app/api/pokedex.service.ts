import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from "rxjs";
import 'rxjs/add/operator/map'

@Injectable()
export class PokedexService {

  private baseUrl: string = 'https://pokeapi.co/api/v2/pokemon/';
  private specieUrl: string = 'https://pokeapi.co/api/v2/pokemon-species/';


  constructor(private http: Http){
  }

  getPokemonList(offset: number): Observable<any>{
    return this.http.get(this.baseUrl + "?offset=" + offset).map(res=>res.json().results);
  }

  getPokemon(id: number){
    return this.http.get(this.baseUrl + id).map(res => res.json());
  }

  getDescription(id: number){
    return this.http.get(this.specieUrl + id).map(res => res.json());
  }

}
