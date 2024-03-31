function searchCharacterClasses(str) {
    return {
        digits: str.match(/\d/g) || [],
        uppercaseLetters: str.match(/[A-Z]/g) || [],
        lowercaseLetters: str.match(/[a-z]/g) || [],
        specialChars: str.match(/[^A-Za-z0-9\s]/g) || []
    };
}

const sampleString = "Hello World 123 ";
const matches = searchCharacterClasses(sampleString);

console.log("Digits:", matches.digits);
console.log("Uppercase Letters:", matches.uppercaseLetters);
console.log("Lowercase Letters:", matches.lowercaseLetters);
console.log("Special Characters:", matches.specialChars);
