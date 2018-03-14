interface List{
    element: Array<number>;
    bubbleSort(List: Array<number>): Array<number>;
    selectSort(List: Array<number>): Array<number>;
}

class ListSort implements List {
    element;
    length;
    constructor(element) {
        this.element = element;
        this.length = element.length - 1;
    }
    static compareLarge(a, b) {
        const result = a > b ? true : false;
        return result;
    }
    static compareSmall(a, b) {
        const result = a > b ? false : true;
        return result;
    }
    public bubbleSort() {
        const centerElement = this.element;
        for(let i = 0 ; i <= this.length; i++) {
            for(let j = 0; j <= this.length; j++) {
                if (ListSort.compareLarge(centerElement[j + 1],centerElement[j])) {
                    [centerElement[j], centerElement[j + 1]] = [centerElement[j + 1], centerElement[j]];                    
                }   
            }
        }
        return centerElement;
    }
    public selectSort() {
        const centerElement = this.element;
        for(let i = 0; i <=  this.length; i ++) {
            let minIndex = i;
            for(let j = 1 ; j <= this.length; j ++) {
                if(ListSort.compareSmall(centerElement[j], centerElement[j - 1])) {
                    minIndex = j;
                }
            }
            if(minIndex != i) {
                [centerElement[minIndex], centerElement[i]] = [centerElement[i], centerElement[minIndex]];                
            }
        }
        return centerElement;
    }
    public insertSort() {
        const centerElement = this.element;
        for (let i = 1; i <= this.length; i ++) {
            let key = centerElement[i];
            for (let j = i - 1; j >= 0 && ListSort.compareLarge(centerElement[j], key); j --) {
                centerElement[j + 1] = centerElement[j];
                centerElement[j] = key;
            }
        }
        return centerElement;
    }
    public shellSort() {
        const centerElement = this.element;
        for (let i = this.length; i > 0; i = Math.floor(i / 2)) {
            let key = centerElement[Math.floor(i / 2)];
            for(let j = Math.floor(i / 2); j >= 0 && ListSort.compareLarge(centerElement[j],key); j = j - Math.floor(i / 2)) {
                centerElement[j + 1] = centerElement[j];
                centerElement[j] = key;
            }
        }
        return centerElement;
    }
}

export default ListSort;