/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop2", "./Stage/costumes/backdrop2.svg", {
        x: 257,
        y: 198.50000000000009
      }),
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 251,
        y: 196.5
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [];

    this.vars.myVariable = 34;
  }
}
