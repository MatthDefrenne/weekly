import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular'

@Component({
  selector: 'app-activity',
  templateUrl: './activity.page.html',
  styleUrls: ['./activity.page.scss'],
})
export class ActivityPage implements OnInit {

  constructor(public modalController: ModalController, public navController: NavController) { }

  ngOnInit() {
  }

  cancel(){
    this.modalController.dismiss();
  }

  selectActivity() {
    this.modalController.dismiss();
    this.navController.navigateForward('activity-selected');
  }




}
