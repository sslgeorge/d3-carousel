// @flow
import $ from "jquery";

export default class SlideItem {
  constructor(item) {
    this.$item = $(item);
  }

  setWidth(width) {
    this.$item.width(width);
  }

  setHeight(height) {
    this.$item.height(height);
  }
}
