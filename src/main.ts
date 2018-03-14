import { Sort } from './algorithm';

const ListSort = new Sort([7,4,3,2,1,9,8]);
console.log(ListSort.bubbleSort());
console.log(ListSort.selectSort());
console.log(ListSort.insertSort());
console.log(ListSort.shellSort());
console.log(ListSort.mergeSort([7,4,3,2,1,9,8]));