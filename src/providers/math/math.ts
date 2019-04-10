import { Injectable } from '@angular/core';
import { Cordova, Plugin } from '@ionic-native/core';

@Plugin({
  pluginName: "mathcalculator",
  plugin: 'cordova-plugin-mathcalculator',
  pluginRef: 'MathCalculator',
  repo: 'https://github.com/aksatyam/mathcalulacteor-cordova-plugin.git',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class MathProvider {

  @Cordova()
  add(arg1: any): Promise<any> {
    return
  }

  @Cordova()
  subtract(arg1: any): Promise<any> {
    return
  }

}
