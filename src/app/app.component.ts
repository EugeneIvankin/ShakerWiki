import {Component} from '@angular/core';
import {Cocteil} from "../cocteil";
import {CocteilIngred} from "../cocteilIngred";
import {Router} from "@angular/router";
import {CocteilService} from "./services/cocteil.servece";
import {User} from "../user";
import { Location }                 from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  {

  cocteil: Cocteil = new Cocteil();
  cocteilIngred: CocteilIngred;
  showDialog = false;
  addCocteilBatton = false;
  user: User = new User();
  currentIdUser: number;
  registrationBatton = true;
  messageFromShowDialog: string;
  private usersCocteil = [];

  constructor(
    private cocteilService: CocteilService,
    private location: Location,
    private router: Router)
    {
      this.currentIdUser = JSON.parse(localStorage.getItem('currentUser'));
      if(this.currentIdUser !== null){
        this.addCocteilBatton = true;
        this.registrationBatton = false;
      }
    }

  searchCocteil(name: string): void {
    let link = ['/detail',name];
    this.router.navigate(link);
  }

  homePage():void {
    let link = [''];
    this.router.navigate(link);
  }

  popCocteil():void {
    let link = [''];
    this.router.navigate(link);
  }

  searchUser(name:string, password:string):void{
    this.cocteilService.searchUser(name, password)
      .subscribe((res) => {this.searchUserAnswer(res)}, (err) => {console.log(err);})
  }

  searchUsersCocteil(idUser):void{
    this.cocteilService.searchUsersCocteil(idUser)
      .subscribe((res) => {localStorage.setItem('usersCocteil', JSON.stringify(res));}, (err) => {console.log(err);})
  }

  searchUserAnswer(res){
    if(res[0]==null){
      this.searchUserDefault();
    }
    else {
      this.searchUserSucksesful(res);
      this.searchUsersCocteil(res[0].idUser);
      //this.location.back();
      let link = [''];
      this.router.navigate(link);
    }
  }

  searchUserSucksesful(res){
    this.addCocteilBatton = true;
    this.registrationBatton = false;
    this.showDialog = false;
    localStorage.setItem('currentUser', JSON.stringify(res[0].idUser));
  }

  searchUserDefault(){
    this.messageFromShowDialog = "Пользователь не найден";
  }

  logOut(){
    this.addCocteilBatton = false;
    this.registrationBatton = true;
    localStorage.clear();
  }

  addUser(name:string, password:string):void{
    this.cocteilService.addUser(name, password)
      .subscribe((res) => {this.addUserAnswer(res)}, (err) => {console.log(err);})
  }

  addUserAnswer(res):void{
    if(res.errno==1062){
      this.messageFromShowDialog = "Пользователь c таким именем есть";
    }
    else {
      this.messageFromShowDialog = "Пользователь добавлен, нажмите Войти";
    }
  }

}
