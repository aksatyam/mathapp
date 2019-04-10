import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MathProvider } from './../../providers/math/math';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  param1: any;
  param2: any;
  constructor(public navCtrl: NavController, public math: MathProvider) {

  }

  testAdd(a, b) {
    let data = {
      param1: a,
      param2: b
    }
    this.math.add(data).then(res => {
      console.log(res);
      alert('Total is:' + res);
    })
      .catch(err => {
        alert('Error is:' + err);
      })
  }

  testSubtract(a, b) {
    let data = {
      param1: a,
      param2: b
    }
    this.math.subtract(data).then(res => {
      console.log(res);
      alert('Remaining is:' + res);
    })
      .catch(err => {
        console.log(err);
        alert('Error is:' + err);
      })
  }
}
