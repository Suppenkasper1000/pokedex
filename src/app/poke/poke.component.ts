import { Component, OnInit } from '@angular/core';
import {Http, Headers} from "@angular/http";
import {Pokemon} from "../api/Pokemon";
import {Observable} from "rxjs";
import {PokedexService} from "../api/pokedex.service";


@Component({
  selector: 'app-poke',
  templateUrl: './poke.component.html',
  styleUrls: ['./poke.component.css']
})
export class PokeComponent implements OnInit {

  pokemon: Pokemon;
  pokemonlist: Pokemon[] = [];
  offset: number = 0;
  selectedPokemon: Pokemon;


  constructor(private http: Http, private  pokedexService: PokedexService){
  }


  ngOnInit() {
    this.getPokemonList();
  }

  getPokemonList(){
    this.pokedexService.getPokemonList(this.offset).subscribe(data => data.map(item => {
      return {
        name: item.name,
        url: item.url,
        id: this.counter()
      }
    }).forEach(item => this.pokemonlist.push(item)));
  }


  getDescription(id: number){
    this.pokedexService.getDescription(id).subscribe(data=>this.pokemon = data);
    return this.pokemon;
  }

  i: number = 1;
  counter(){
    return this.i++;
  }

  loadMore(){
    this.offset = this.offset + 20;
    this.getPokemonList();
  }

  selectPokemon(id:number){
    this.pokedexService.getPokemon(id).subscribe(data=>this.selectedPokemon = data);
    return this.selectedPokemon;
  }



}
