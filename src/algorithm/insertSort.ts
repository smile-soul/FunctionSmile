function insertSort(List) {
    if(!List || List.length <= 0) {
        return ;
    } else {
        for (let i = 1 ; i <= List.length - 1; i++) {
            for(let j = i; j > 0 && List[j - 1] > List[j]; j--) {
                [List[j - 1], List[j]] = [List[j], List[j - 1]];
            }
        }
    }
    return List;
}

console.log(insertSort([7,4,3,2,1,9,8]));

export default insertSort;