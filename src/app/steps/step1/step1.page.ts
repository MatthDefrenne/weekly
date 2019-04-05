import { Component, OnInit } from '@angular/core';
import { UserPreferencesService } from '../../services/user-preferences.service'
import * as _ from "lodash";

@Component({
  selector: 'app-step1',
  templateUrl: './step1.page.html',
  styleUrls: ['./step1.page.scss'],
})
export class Step1Page implements OnInit {



  constructor(public userPreferencesService: UserPreferencesService) { 
  }

  ngOnInit() {
  }

}
