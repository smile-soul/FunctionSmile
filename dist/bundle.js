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

var ListSort$1 = function () {
    function ListSort(element) {
        this.element = element;
        this.length = element.length - 1;
    }
    ListSort.compareLarge = function (a, b) {
        var result = a > b ? true : false;
        return result;
    };
    ListSort.compareSmall = function (a, b) {
        var result = a > b ? false : true;
        return result;
    };
    ListSort.prototype.bubbleSort = function () {
        var centerElement = this.element;
        for (var i = 0; i <= this.length; i++) {
            for (var j = 0; j <= this.length; j++) {
                if (ListSort.compareLarge(centerElement[j + 1], centerElement[j])) {
                    _a = [centerElement[j + 1], centerElement[j]], centerElement[j] = _a[0], centerElement[j + 1] = _a[1];
                }
            }
        }
        return centerElement;
        var _a;
    };
    ListSort.prototype.selectSort = function () {
        var centerElement = this.element;
        for (var i = 0; i <= this.length; i++) {
            var minIndex = i;
            for (var j = 1; j <= this.length; j++) {
                if (ListSort.compareSmall(centerElement[j], centerElement[j - 1])) {
                    minIndex = j;
                }
            }
            if (minIndex != i) {
                _a = [centerElement[i], centerElement[minIndex]], centerElement[minIndex] = _a[0], centerElement[i] = _a[1];
            }
        }
        return centerElement;
        var _a;
    };
    return ListSort;
}();

var ListSort = new ListSort$1([7, 4, 3, 2, 1, 9, 8]);
console.log(ListSort.bubbleSort());
console.log(ListSort.selectSort());
//# sourceMappingURL=bundle.js.map
