import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Datos } from '../datos/datos';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

 
fondo;
myColor;
miestilo;
  fondo1="assets/1.png";
  fondo2="assets/2.png";
  fondo3="assets/3.png";
  constructor(public navCtrl: NavController, public dato:Datos) {
    this.myColor=dato.GetMyColor();
    this.fondo=dato.GetMiFondo();
  }

  ionViewDidEnter(){
    this.myColor=this.dato.GetMyColor();
    this.fondo=this.dato.GetMiFondo();
  }

  onChangeestilo()
  {
    console.info("entra");
    if(this.miestilo=="estilo1")
    {
      this.fondo=this.fondo1;
      this.myColor="Rojo";
    }
    if(this.miestilo=="estilo2")
    {
      this.fondo=this.fondo2;
      this.myColor="Verde";

    }
    if(this.miestilo=="estilo3")
    {
      this.fondo=this.fondo3;
      this.myColor="Amarillo";

    }
     this.dato.SetMiFondo(this.fondo);
     this.dato.SetMyColor(this.myColor);
    
  }

}
