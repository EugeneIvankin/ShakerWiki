import {Component, Input, OnInit} from '@angular/core';
import { AllCocteils } from '../../allCocteils';
import {CocteilService} from "../services/cocteil.servece";



@Component({
  moduleId: module.id,
  selector: 'favoriteCocteils',
  templateUrl: 'favoriteCocteils.html',
  styleUrls: ['favoriteCocteils.css']
})


export class FavoriteCocteils implements OnInit{

  usersCocteils = JSON.parse(localStorage.getItem('usersCocteil'));
  usersCocteilsIsEmpty = false;


  ngOnInit(): void {
    if (this.usersCocteils.length == 0){
      this.usersCocteilsIsEmpty = true;
    }
  }



}
