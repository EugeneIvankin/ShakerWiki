import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";


@Injectable()
export class CocteilService {
  constructor(private http: Http) {}

  searichCocteil(id){
    var headers = new Headers();
    return this.http.post('/getCocteil/cocteil', {id: id}, {headers: headers})
        .map(res=>res.json())
        .catch((error:any) =>{return Observable.throw(error);})

  }

  searichIndred(id){
    var headers = new Headers();
    return this.http.post('/getCocteil/ingredients', {id: id}, {headers: headers})
      .map(res=>res.json())
      .catch((error:any) =>{return Observable.throw(error);})

  }

  searichIdOfCocteil(name){
    var headers = new Headers();
    return this.http.post('/getCocteil/idCocteil', {name: name}, {headers: headers})
      .map(res=>res.json())
      .catch((error:any) =>{return Observable.throw(error);})
  }

  allCocteil(){
    return this.http.get('/getCocteil/all')
      .map(res=>res.json());
  }

  popCocteil(){
    return new Promise ((resolve, reject) => {
      this.http.get('/getCocteil/popCocteil')
      .map(res=>res.json())
      .subscribe(res => { resolve (res); }, (err) => {reject (err); });
    });
  }

  addLike(idCocteil, idUser){
    var headers = new Headers();
    return this.http.put('/setCocteil/addLike', {idCocteil: idCocteil, idUser: idUser}, {headers: headers})
      .map(res=>res.json())
      .catch((error:any) =>{return Observable.throw(error);})
  }

  addCocteil(name, history, preparation, ingredients){
    var headers = new Headers();
    return this.http.put('/setCocteil/addCocteil', {name: name, history: history, preparation: preparation, ingredients: ingredients}, {headers: headers})
      .map(res=>res.json())
      .catch((error:any) =>{return Observable.throw(error);})
  }

  addCocteilIngredients(name, ingredients){
    var headers = new Headers();
    return this.http.put('/setCocteil/addCocteilIngredients', {name: name, ingredients: ingredients}, {headers: headers})
      .map(res=>res.json())
      .catch((error:any) =>{return Observable.throw(error);})
  }

  searchUser(name, password){
    var headers = new Headers();
    return this.http.post('/user/searchUser', {name: name, password: password}, {headers: headers})
      .map(res=>res.json())
      .catch((error:any) =>{return Observable.throw(error);})
  }

  addUser(name, password){
    var headers = new Headers();
    return this.http.put('/user/addUser', {name: name, password: password}, {headers: headers})
      .map(res=>res.json())
      .catch((error:any) =>{return Observable.throw(error);})
  }

  searchUsersCocteil(idUser){
    return new Promise ((resolve, reject) => {
      var headers = new Headers();
      this.http.post('/user/searchUsersCocteil',{idUser: idUser}, {headers: headers} )
        .map(res=>res.json())
        .subscribe(res => { resolve (res); }, (err) => {reject (err); });
    });
  }

}

