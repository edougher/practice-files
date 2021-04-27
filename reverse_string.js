const reverseString = str => {
    let newString = ""
    for (x = str.length - 1; x >= 0; x--){
        newString += str[x]
    }
    console.log(newString);
}

reverseString('hello')

function reverseWithMethods(string){
    //let splitString = string.split("");
    //let reversedString = splitString.reverse()
    //let joinString = reversedString.join("")
    
    let splitString = string.split("").reverse().join("");
    console.log(splitString);
}

reverseWithMethods('Hello')

