class ListSearch {
    element;
    length;
    constructor(element) {
        this.element = element;
        this.length = element.length;
    }
    public SequenceSearch(value) {
        for(let i = 0; i < this.length; i++) {
            if(this.element[i] == value) {
                return i;
            }
        }
        return -1;
    }
    public BinarySearch(arrayList, element) {
        let middle = Math.floor(arrayList.length / 2);
        console.log(middle);
        
        // if(arrayList[middle] == element) {
        //     return middle;
        // } else if (arrayList[middle] > element) {
        //     this.BinarySearch(arrayList.slice(0,middle), element);
        // } else if (arrayList[middle] < element) {
        //     this.BinarySearch(arrayList.slice(middle), element);
        // }

    }
}

export default ListSearch;