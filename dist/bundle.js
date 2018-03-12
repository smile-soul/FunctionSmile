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

// 时间复杂度n平方
function bubbleSort(List) {
    if (!List || List.length <= 0) {
        return;
    } else {
        for (var i = 0; i <= List.length - 1; i++) {
            for (var j = 0; j <= List.length - 1; j++) {
                if (List[j] > List[j + 1]) {
                    _a = [List[j + 1], List[j]], List[j] = _a[0], List[j + 1] = _a[1];
                } //正序
            }
            
        }
    }
    return List;
    var _a;
}

console.log(bubbleSort([7, 4, 3, 2, 1, 9, 8]));
//# sourceMappingURL=bundle.js.map
