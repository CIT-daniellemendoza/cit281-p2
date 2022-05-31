/*
    CIT 281 Project 2
    Name: Danielle Mendoza
*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

let result = "";

//let lengthOfOutputString = getRandomInteger(5, 26);

// returns a random lower case letter
function getRandomLetter() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    return alphabet[getRandomInteger(0,alphabet.length)]
}

//returns a random length string using a for loop
function getRandomString(minLength, maxLength) {
    let lengthOfOutputString = getRandomInteger(minLength, maxLength + 1)
    for (let i = 0; i < lengthOfOutputString; i++) {
        result += getRandomLetter()
    }
    return result
}

// sorts a string into alphabetic order using array split methods
function getSortedString(string) {
    return string.split('').sort().join('');
}

console.log(getSortedString(getRandomString(10, 20)));
