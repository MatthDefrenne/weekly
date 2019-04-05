import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'
@Component({
  selector: 'app-step8',
  templateUrl: './step8.page.html',
  styleUrls: ['./step8.page.scss'],
})
export class Step8Page implements OnInit {

  constructor(navController: NavController) {

    setTimeout(() => {
      navController.navigateRoot('/activities');
    }, 2000)
   }

  ngOnInit() {
  }

}
