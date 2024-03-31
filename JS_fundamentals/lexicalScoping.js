function outerFunction(parameter) {
    
    let outerVariable = 'I am a variable from outerFunction';

    function innerFunction() {
        console.log('Parameter of outerFunction:', parameter);

        console.log('Variable from outerFunction:', outerVariable);
    }

    // Returning the inner function
    return innerFunction;
}

let closure = outerFunction('Hello, world!');

closure();
