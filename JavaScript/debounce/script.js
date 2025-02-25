function debounce(fn, delay) {
  let timer = null;
  return function() {
    if (timer) clearTimeout(timer);
    timer = setTimeout(function() {
      fn.apply(this, arguments);
    }, delay);
  };
}

const doSearch = debounce(() => console.log("search"), 300);
