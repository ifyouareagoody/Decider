/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Arrow1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("arrow1-a", "./Arrow1/costumes/arrow1-a.svg", {
        x: 28,
        y: 23
      }),
      new Costume("arrow1-b", "./Arrow1/costumes/arrow1-b.svg", {
        x: 28,
        y: 23
      }),
      new Costume("arrow1-c", "./Arrow1/costumes/arrow1-c.svg", {
        x: 23,
        y: 28
      }),
      new Costume("arrow1-d", "./Arrow1/costumes/arrow1-d.svg", {
        x: 23,
        y: 28
      })
    ];

    this.sounds = [new Sound("pop", "./Arrow1/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "space" },
        this.whenKeySpacePressed
      )
    ];
  }

  *whenKeySpacePressed() {
    this.direction += 30;
    this.stage.vars.myVariable = 34;
  }
}
