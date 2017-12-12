function __$styleInject(css, returnValue) {
  if (typeof document === 'undefined') {
    return returnValue;
  }
  css = css || '';
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  head.appendChild(style);
  
  if (style.styleSheet){
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  return returnValue;
}

var chunk = function chunk(data, lengthdata) {
    var name = [];
    for (var i = 0; i < data.length; i += lengthdata) {
        var center = [];
        for (var k = i; k < data.length; k++) {
            center.push(data[k]);
        }
        
        name.push(center);
    }
    return name;
};
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 4));
//# sourceMappingURL=bundle.js.map
