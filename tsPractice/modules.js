"use strict";
exports.__esModule = true;
var like_component_1 = require("./like.component");
var component = new like_component_1.likeComponent(10, true);
component.onClick();
console.log("likesCount: " + component._likesCount + ", isSelected: " + component._isSelected);
