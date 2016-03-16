let example = require("./example");
let eventHandlers = require("./handlers").handlers;

let $ = require("jquery");
let slick = require("slick-carousel/slick/slick.min.js");


document.addEventListener(`click`, eventHandlers.clickOnCard);


$(document).ready(() => {
  $(`.articles__cards`).slick({
    infinite: true,
    slidesToShow: 3,
    nextArrow: $(`.articles__right`),
    prevArrow: null
  });
  $(`.clients__logos`).slick({
    infinite: true,
    slidesToShow: 6,
    nextArrow: $(`.clients__right`),
    prevArrow: null
  });
  $(`.portfolio__slider--list`).slick({
    infinite: true,
    slidesToShow: 3.5,
    autoplay: true,
    dots: true,
    prevArrow: null,
    nextArrow: null,
    pauseOnHover: true
  });
  $(`.reviews__ul`).slick({
    infinite: true,
    slidesToShow: 3,
    nextArrow: $(`.reviews__next`),
    prevArrow: null
  })

});