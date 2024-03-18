export {};

/**
 * tCreate a function called isBlank, which checks if passed string is blank or no
 */
 // Check if the string is null, undefined, or contains only whitespace
 function isBlank(str:string | null | undefined): boolean {
    if(typeof str == "string" && str.trim().length === 0) {
        return true;
    }else if (str === undefined || str === null){
        return true;
    } else {
        return false;
    }
    
};
console.log(isBlank(null)); // Expected output: true
console.log(isBlank("")); // Expected output: true
console.log(isBlank(" ")); // Expected output: true
console.log(isBlank("abc")); // Expected output: false
console.log(isBlank(" abc ")); // Expected output: false

