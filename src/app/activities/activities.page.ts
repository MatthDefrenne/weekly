import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular'
import { ActivityPage } from '../activity/activity.page'
@Component({
  selector: 'app-activities',
  templateUrl: './activities.page.html',
  styleUrls: ['./activities.page.scss'],
})
export class ActivitiesPage implements OnInit {

  slideOpts = {
    effect: 'flip'
  };



  activities= [
    {
      name: "Jimmy's Restaurant",
      town: "Bruxelles",
      telephone: "02/8082520",
      email: "info@horlogedusud.be",
      street: "Rue des Grands Carmes",
      cooking_sub: "Méditerrannéenne, Marocaine, Moyen-Orient, Tunisienne",
      vegetarian: true,
      vegetalien: false,
      gluten: false,
      halal: true,
      kasher: false,
      PMR: true,

    },
    {
      name: "L'Horloge du Sud",
      town: "Ixelles",
      telephone: "02/8082520",
      email: "info@horlogedusud.be",
      street: "Rue des Grands Carmes",
      cooking_sub: "Méditerrannéenne, Moyen-Orient, Française",
      vegetarian: true,
      vegetalien: false,
      gluten: false,
      halal: true,
      kasher: false,
      PMR: true,
    },
    {
      name: "Dar Dallia",
      town: "Ixelles",
      telephone: "02/8082520",
      email: "info@horlogedusud.be",
      street: "Rue des Grands Carmes",
      cooking_sub: "Méditerrannéenne, Moyen-Orient, Française",
      vegetarian: true,
      vegetalien: false,
      gluten: false,
      halal: true,
      kasher: false,
      PMR: true,

    },
  ]

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }


  async openActivity() {
    const modal = await this.modalController.create({
      component: ActivityPage,
    });
     modal.present();
  }





  findCorrespodences() {
  } 
}
