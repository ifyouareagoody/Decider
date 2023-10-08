import {
  Project,
  Sprite
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Arrow1 from "./Arrow1/Arrow1.js";

const stage = new Stage({ costumeNumber: 2 });

const sprites = {
  Arrow1: new Arrow1({
    x: -9,
    y: 0,
    direction: -30,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 200,
    visible: true,
    layerOrder: 1
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
