const menu = document.querySelector(".icon"),
    menuBlock = document.querySelector(".main_level_menu");


menu.addEventListener('click',function ()
{
  menuBlock.classList.toggle('mobile_menu');
  menu.classList.toggle('active');
});
scrollTo = (element) => {
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: element.offsetTop + 54
  });
}

var accordion = (function (element) {

  var _getActiveItems = function (elements) {
    var items = [];
    elements.forEach(function (item) {
      if (item.classList.contains('open')) {
        items.push(item);
      }
    });
    return items;
  };

  return function () {
    var _mainElement = {},
        _items = {};


    var _actionClick = function (e) {

          var header = e.target,
              item = header.parentElement,
              activeItems = _getActiveItems(_items);
          scrollTo(item);
          if (!activeItems.length) {
            item.classList.add('open');

          } else {
            activeItems.forEach(function (activeItem) {
              if (!activeItem.contains(item)) {
                activeItem.classList.remove('open');
              }
            });
            item.classList.toggle('open');
          }
          scrollTo(item);
        },
        _setupListeners = function () {

          _mainElement.addEventListener('click', _actionClick);
        };

    return {
      init: function (element) {
        _mainElement = (typeof element === 'string' ? document.querySelector(element) : element);
        _items = _mainElement.querySelectorAll('li.parent');
        _setupListeners();
      }
    }

  }
})();


var accordion1 = accordion();
accordion1.init('#accordion');