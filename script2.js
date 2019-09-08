const list = getElementById("grid");



var i = document.querySelector('grid-element');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);