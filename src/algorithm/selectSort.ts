function selectSort(List) {
    if(!List || List.length < 0) {
        return;
    } else {
        for (let i = 0; i <= List.length - 1; i++) {
            let minIndex = i;
            for(let j = i + 1; j <= List.length - 1; j++) {
                if(List[minIndex] < List[j]) {
                    minIndex = j;
                }
            }
            if (minIndex != i) {
                [List[i], List[minIndex]] = [List[minIndex],List[i]];
            }
        }
    }
    return List;
}

console.log(selectSort([6,7,4,1,3,4,9]));

export default selectSort;