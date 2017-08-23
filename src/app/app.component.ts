import {Component} from '@angular/core';
import {Cocteil} from "../cocteil";
import {CocteilIngred} from "../cocteilIngred";
import {Router} from "@angular/router";
import {User} from "../user";
import {CocteilService} from "./services/cocteil.servece";

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
  registrationBatton = true;
  messageFromShowDialog: string;

  constructor(
    private cocteilService: CocteilService,
    private router: Router,
    public user: User)
  {}

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

  searchUserAnswer(res){
    if(res[0]==null){
      this.searchUserDefault();
    }
    else {
      this.user = res[0];
      console.log(this.user.idUser);
      this.searchUserSucksesful();
    }
  }

  searchUserSucksesful(){
    this.addCocteilBatton = true;
    this.registrationBatton = false;
    this.showDialog = false;
  }

  searchUserDefault(){
    this.messageFromShowDialog = "Пользователь не найден";
  }

  addUser(name:string, password:string):void{
    console.log(name+" "+password);
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
