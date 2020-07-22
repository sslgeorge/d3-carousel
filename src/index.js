import "normalize";
import "./styles/_icons.scss";
import "./styles/_site.scss";
import "./styles/_carousel.scss";
import $ from "jquery";
import SlideLayout from "./slide-layout";

$(document).ready(() => {
  SlideLayout.init();
});
