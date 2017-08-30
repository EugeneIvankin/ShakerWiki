import {Component, Input, OnInit} from '@angular/core';
import { AllCocteils } from '../../allCocteils';
import {CocteilService} from "../services/cocteil.servece";



@Component({
  moduleId: module.id,
  selector: 'favoriteCocteils',
  templateUrl: 'favoriteCocteils.html',
  styleUrls: ['favoriteCocteils.css']
})


export class FavoriteCocteils{

  usersCocteils = JSON.parse(localStorage.getItem('usersCocteil'));

}
