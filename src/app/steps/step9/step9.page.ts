import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
moment.locale('fr');  // optional - can remove if you are only dealing with one locale

@Component({
  selector: 'app-step9',
  templateUrl: './step9.page.html',
  styleUrls: ['./step9.page.scss'],
})
export class Step9Page implements OnInit {


  days: any = ["Aujourd'hui", "Demain"]

  hours = [{id: 0, hours: "Maintenant"}];
  hoursPreSelected = "0";
  dayPreSelected = "0";

  constructor() {
    for (let day = 2; day < 14; day++) {
        let date = moment(new Date).add('days', day);
        this.days.push(date.format("DD-MM"));      
    }

    let now = moment(new Date()).format('h') as any;
    let i = 1;
    for(let hour = now; hour < 24; hour++) {
      i++
      this.hours.push({id:i, hours: moment({ hour }).format('LT')});
      this.hours.push({id:i+=1, hours: moment({hour, minute: 30}).format('LT')});
    }

    console.log(this.hours);
   }

  ngOnInit() {
  }

}
