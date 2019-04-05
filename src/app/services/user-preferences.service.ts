import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class UserPreferencesService {
  


  filters = {
    type: null,
    category_cooking: []
  }

  constructor() {

  }



}
