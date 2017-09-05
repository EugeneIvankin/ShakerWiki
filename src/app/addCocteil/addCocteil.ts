import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {CocteilService} from "../services/cocteil.servece";
import {Cocteil} from "../../cocteil";
import {CocteilIngred} from "../../cocteilIngred";
import {Router} from "@angular/router";

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
  templateUrl: 'addCocteil.html',
  styleUrls: ['addCocteil.css']
})

export class AddCocteil{
  cocteil: Cocteil = new Cocteil();
  cocteilIngred: CocteilIngred = new CocteilIngred();
  name: any;
  preporation: string;
  comit: any;
  cocteilIngredient: Ingredient[]=[];


  constructor(
    private http: Http,
    private cocteilService: CocteilService,
    private router: Router)
  {}

  addCocteil(name: string, history: string, preparation: string):void {
    this.cocteilService.addCocteil(name, history, preparation)
      .subscribe((res) => {this.addCocteilSucksesful()}, (err) => {console.log(err);})
    this.cocteilService.addCocteilIngredients(name, this.cocteilIngredient)
      .subscribe((res) => {this.addCocteilSucksesful()}, (err) => {console.log(err);})

  }

  addCocteilIngredient(ingredient: string, volum: string): void {
    this.cocteilIngredient.push(new Ingredient(ingredient, volum));
    console.log(this.cocteilIngredient);
  }


addCocteilSucksesful(): void{
  let link = ['addedCocteil'];
  this.router.navigate(link);
}

}
