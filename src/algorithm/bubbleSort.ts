// 时间复杂度n平方
function bubbleSort(List) {
    if(!List || List.length <= 0) {
        return ;
    } else {
        for(let i = 0; i <= List.length - 1; i ++) {
            for(let j = 0; j <= List.length - 1; j ++ ){
                if(List[j] > List[j + 1]) {
                    [List[j], List[j + 1]] = [List[j + 1], List[j]];
                }//正序
                // if(List[j] < List[j + 1]) {
                //     [List[j], List[j + 1]] = [List[j + 1], List[j]];
                // }
            };
        }
    }
    return List;
}



export default bubbleSort;