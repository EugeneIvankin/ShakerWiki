import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {CocteilService} from "./services/cocteil.servece";
import {Cocteil} from "../cocteil";
import {CocteilIngred} from "../cocteilIngred";

export class Ingredient{
  name: string;
  volum: string;

  constructor(name: string, volum: string) {
    this.name = name;
    this.volum = volum;
  }
}


@Component({
  selector: 'addCocteil',
  templateUrl: './addCocteil.html',
  styleUrls: ['./addCocteil.css']
})

export class AddCocteil{
  cocteil: Cocteil;
  cocteilIngred: CocteilIngred;
  name: any;
  comit: any;
  cocteilIngredient: Ingredient[]=[];


  constructor(
    private http: Http,
    private cocteilService: CocteilService,)
  {}

  addCocteil(name: string, history: string, preparation: string):void {
    this.cocteilService.addCocteil(name, history, preparation)
      .subscribe((res) => {this.addCocteilSucksesful()}, (err) => {console.log(err);})
    this.cocteilService.addCocteilIngredients(this.cocteilIngredient)
      .subscribe((res) => {this.addCocteilSucksesful()}, (err) => {console.log(err);})

  }

  addCocteilIngredient(ingredient: string, volum: string): void {
    this.cocteilIngredient.push(new Ingredient(ingredient, volum));
    console.log(this.cocteilIngredient);
  }


addCocteilSucksesful(){
  this.comit ="Коктейль успешно добавлен";
}

}