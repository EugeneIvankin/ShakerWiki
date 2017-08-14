import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";




@Injectable()
export class CocteilService {
  constructor(private http: Http) {}

 /* getCocteil() {
    return new Promise ((resolve, reject) => {
      this.http.get('/cocteilDetail')
        .map(res => res.json())
        .subscribe(res => { resolve (res); }, (err) => {reject (err); });
    });
  }*/


  /*getCocteilIngrediens() {
    return new Promise ((resolve, reject) => {
      this.http.get('/cocteilDetail/ingredients')
        .map(res => res.json())
        .subscribe(res => { resolve (res); }, (err) => {reject (err); });
    });
  }*/


  searichCocteil(name){
    var headers = new Headers();
    return this.http.post('/cocteilDetail', {name: name}, {headers: headers})
        .map(res=>res.json())
        .catch((error:any) =>{return Observable.throw(error);})

  }

  searichIndred(name){
    var headers = new Headers();
    return this.http.post('/cocteilDetail/ingredients', {name: name}, {headers: headers})
      .map(res=>res.json())
      .catch((error:any) =>{return Observable.throw(error);})

  }

  allCocteil(){
    return this.http.get('/cocteilDetail/all')
      .map(res=>res.json());
  }

  popCocteil(){
    return new Promise ((resolve, reject) => {
      this.http.get('/cocteilDetail/popCocteil')
      .map(res=>res.json())
      .subscribe(res => { resolve (res.name_of_cocteil); }, (err) => {reject (err); });
    });
  }

  addLike(name){
    var headers = new Headers();
    return this.http.put('/cocteilDetail/addLike', {name: name}, {headers: headers})
      .map(res=>res.json())
      .catch((error:any) =>{return Observable.throw(error);})
  }

  addCocteil(name, history, preparation){
    var headers = new Headers();
    return this.http.put('/cocteilDetail/addCocteil', {name: name, history: history, preparation: preparation}, {headers: headers})
      .map(res=>res.json())
      .catch((error:any) =>{return Observable.throw(error);})
  }

  addCocteilIngredients(ingredients){
    var headers = new Headers();
    return this.http.post('/cocteilDetail/addCocteilIngredients', {ingredients: ingredients}, {headers: headers})
      .map(res=>res.json())
      .catch((error:any) =>{return Observable.throw(error);})
  }
}

