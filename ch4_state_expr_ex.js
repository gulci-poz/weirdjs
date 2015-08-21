// funkcja to obiekt, który można wywołać (invoke)
// funkcja można posiadać właściwości (prosty typ lub obiekt)
// może to być również funkcja
// dwie dodatkowe właściwości to name i code
// funkcja coś produkuje, zwraca wartość (to obiekt)
// lub efekt uboczny (zwraca wtedy obiekt typu undefined)
// first class function - w rozumieniu JS to po prostu
// funkcja, która jest obiektem i ma takie same właściwości
// (może być zapisana pod zmienną, może być przekazana, może zostać utworzona w locie; poza tym może być wykorzystana - invoke; posiada właściwości)
// first class object -> programowanie funkcyjne

// mogę wywołać funkcję w miejscu przed pojawieniem się jej kodu
greet();

// function statement - funkcja jest zapisana w pamięci
// wiadomo wprost, że jest to obiekt funkcji
// znamy wartość name
// statement - do work - wykonuje pracę
// ale przy wowałaniu nie ma żadnego rezultatu - wartości
function greet() {
    console.log('Hi!');
}

greet.language = 'english';

console.log(greet);
console.log(greet.language);

// obiekt funkcji jest zapisany w global execution context
// sama funkcja ma swój execution context
console.log(window.greet.language);

// odwołujemy się bezpośrednio do miejsca w pamięci
greet();

// wyrażenie (expression) - kod, który produkuje wartość
// wartość nie musi być zachowana w zmiennej

// takie wykonanie się nie uda
// anonymousGreet is not a function
// hoisting się uda - mamy obiekt typu undefined
// JS wie o obiekcie undefined
console.log(anonymousGreet);
// anonymousGreet();

// function expression
// zapisujemy obiekt funkcji
// zmienna zna adres funkcji (referencję), nie jest funkcją
// zapisujemy pod zmienną referencję do anonimowej funkcji
// tym samym zmienna nie ma wiedzy o właściwości name i code
// expression - bo jest przypisanie do zmiennej wartości
// tą wartością jest obiekt funkcji
// a ponadto hoisting daje name tu obiekt undefined
var anonymousGreet = function() {
    console.log('Hi, from anonymous function!');
};

// odwołujemy się do zmiennej i wykonujemy kod, do którego kieruje
anonymousGreet();

// co tak naprawdę daje nazwanie zmiennej?
var test = function testGreet() {
    console.log('test');
};

console.log('anonymousGreet name: ' + anonymousGreet.name);
console.log('anonymousGreet code: ' + anonymousGreet.code);
// idzie odczytać nazwę, ale to chyba nie jest stricte nazwa funkcji tylko metadane zmiennej
console.log('test name: ' + test.name);
console.log('test code: ' + test.code);

function log(a) {
    console.log(a);
    // można też tak to ująć i wykonać funkcję
    //a();
}

function loga(a) {
    // można też tak to ująć i wykonać funkcję
    a();
}

// można przekazać anonimowy obiekt
// jest on przetwarzany jako wyrażenie
// i tworzony w locie
log(function() {
    console.log('hello from anonymous function');
});

// możemy sobie wywołać anonimową funkcję,
// jeśli nic nie zwrócimy, to dostaniemy undefined
// wtedy drukujemy rezultat wykonania funkcji
log((function() {
    console.log('hello from anonymous function');
    return true;
})());

loga(function() {
    console.log('hello from anonymous function');
});
