export {};

const repeatString = (str:string, count:number):string => {
    return str.repeat(count)
};

console.log(repeatString("a", 4)); // Expected output: 'aaaa'
console.log(repeatString("b", 5)); // Expected output: 'bbbbb'
