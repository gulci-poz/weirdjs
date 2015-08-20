// ES6 umożliwi nadanie domyślnej wartości
function greet(name) {
    // Boolean(undefined) da nam false
    // || zwróci to, co się konwertuje na true
    // jeśli coś będzie w name, to || zwróci pierwszą wartość
    // dokładniej, || zwraca pierwszą wartość, którą da się skonwertować na true
    name = name || '<Your name here>';
    console.log('Hello ' + name);
}

greet('gulci');
greet();

// FRAMEWORKS

// kod z plików js jest konsolidowany w całość,
// nie są tworzone konteksty wykonania, to jeden kod,
// wszystko jest w global execution context
console.log(libName);
