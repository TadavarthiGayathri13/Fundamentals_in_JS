// Function to test if there is a match between a regex pattern and a string
function testRegex(pattern, str) {
    return new RegExp(pattern).test(str);
}

// Test the function with various patterns and strings
console.log(testRegex(/\d/, "Hello, world!")); // false - no digits in the string
console.log(testRegex(/\d/, "Hello, world! 123")); // true - digits found in the string
console.log(testRegex(/[aeiou]/i, "Hello, world!")); // true - vowels found in the string (case insensitive)
