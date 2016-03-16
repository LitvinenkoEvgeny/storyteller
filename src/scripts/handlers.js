exports.handlers = {
  clickOnCard: clickOnCard
};
function clickOnCard(e) {
  let elem = e.target;
  while (elem.parentNode) {

    if (!elem.classList) return;

    let opened = document.querySelectorAll(`.article__card.open`);

    if (elem.classList.contains(`article__card`)) {

      if (opened.length) {
        for (let i = 0; i < opened.length; i++) {
          var item = opened[i];
          if (item === elem) continue;
          item.classList.remove(`open`);
        }
      }

      elem.classList.toggle(`open`);

    }

    elem = elem.parentNode;
  }
}
