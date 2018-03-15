import { Sort, Search } from './algorithm';

const ListSort = new Sort([7,4,3,2,1,9,8]);
console.log(ListSort.bubbleSort());
console.log(ListSort.selectSort());
console.log(ListSort.insertSort());
console.log(ListSort.shellSort());

const ListSearch = new Search([2,3,4,5,6,7]);

console.log(ListSearch.SequenceSearch(3));
console.log(ListSearch.BinarySearch([1,2,3,4,5,6], 5));