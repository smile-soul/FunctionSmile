interface chunkType {
    (oldArray: Array<any>, length: number): Array<any>;
    [propName: string]: any;
}

let chunk: chunkType = (data, lengthdata) => {
    const name: Array<any> = [];
    for (let i:number = 0; i < data.length; i+= lengthdata) {
        let center: Array<any> = [];
        for (let k: number = i; k < data.length; k++) {
            center.push(data[k]);
        };
        name.push(center);
    }
    return name;
}
console.log(chunk([1,2,3,4,5,6,7,8], 4));
