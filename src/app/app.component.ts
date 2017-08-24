import {Component} from '@angular/core';
import {Cocteil} from "../cocteil";
import {CocteilIngred} from "../cocteilIngred";
import {Router} from "@angular/router";
import {CocteilService} from "./services/cocteil.servece";
import {User} from "../user";

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
  registrationBatton = true;
  messageFromShowDialog: string;
  constructor(
    private cocteilService: CocteilService,
    private router: Router,
    )
  {}

  searchCocteil(name: string): void {
    let link = ['/detail',name];
    this.router.navigate(link, { queryParams: { id : this.user.idUser } });
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
      this.searchUserSucksesful();
      this.user = res[0];

    }
  }

  searchUserSucksesful(){
    this.addCocteilBatton = true;
    this.registrationBatton = false;
    this.showDialog = false;

    let link = [''];
    this.router.navigate(link);
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
