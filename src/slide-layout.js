import SlidItem from "./slide-item";
import $ from "jquery";

let $slidItems = [];

const SlideLayout = {
  _initialSlide: 0,
  _currentSlide: 0,
  _slidesToScroll: 6,
  _widthPerSlide: 0,
  _slideItems: [],
  init() {
    const $items = document.querySelectorAll(".carousel__item") || [];
    this._slideItems = this.initSlideItems(Array.from($items));
    this._refresh();
    this._initListeners();
  },

  initSlideItems(items = []) {
    return items.map(element => new SlidItem(element));
  },

  _updateSlideWidth() {
    this._slideItems.forEach(slidItem => {
      slidItem.setWidth(this._widthPerSlide);
    });
  },

  _getVisibleSlidesCount() {
    const container = document.querySelector(".carousel");
    const { width } = container.getBoundingClientRect();
    if (width <= 800) {
      return 2;
    }

    if (width <= 1200) {
      return 3;
    }

    if (width <= 1600) {
      return 4;
    }

    return 6;
  },

  _calculateEachSlideWidth() {
    const container = document.querySelector(".carousel");
    const { width: containerWidth } = container.getBoundingClientRect();
    const widthPerItem = containerWidth / this._slidesToScroll;

    return widthPerItem;
  },

  _initListeners() {
    const leftNav = document.querySelector(".carousel__nav-btn--left");
    const rightNav = document.querySelector(".carousel__nav-btn--right");

    window.addEventListener("resize", this._refresh.bind(this));
    leftNav.addEventListener("click", this._handleLeftNavClick.bind(this));
    rightNav.addEventListener("click", this._handleRightNavClick.bind(this));
  },

  _handleLeftNavClick() {
    this._currentSlide = this._currentSlide - (this._slidesToScroll + 1);
    this._refresh();
  },

  _handleRightNavClick() {
    this._currentSlide = this._currentSlide + this._slidesToScroll + 1;
    this._refresh();
  },

  _scrollToCurrentSlide() {
    const scrollContainer = document.querySelector(".carousel__items");

    $(scrollContainer).css(
      "transform",
      `translateX(${this._currentSlide * this._widthPerSlide})`
    );

    // scrollContainer.getElementsByClassName.
  },

  _refresh() {
    this._widthPerSlide = this._calculateEachSlideWidth();
    this._slidesToScroll = this._getVisibleSlidesCount();
    this._widthPerSlide = this._calculateEachSlideWidth();
    this._updateSlideWidth();
    this._scrollToCurrentSlide();
  }
};

SlideLayout._initListeners($slidItems);
export default SlideLayout;
