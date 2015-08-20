b();
console.log(a);

// Hoisting - Setup Memory Space for Variables and Functions

var a = 'Hello World!';

function b() {
    console.log('function b called');
}

b();
console.log(a);

////////////////////

var c;
console.log(c);

// unikamy przypisywania undefined
//c = undefined;

if (c === undefined) {
    console.log('c is undefined');
}
else {
    console.log('c is defined');
}

////////////////////

// zasięg zmiennej (scope) zależy od środowiska leksykalnego,
// a nie od położenia w stosie uruchomienia funkcji
console.log('--=== Scoping ===--');

// 1
/*
function secondF() {
    //var myVar = 3;
    console.log(myVar);
}

function firstF() {
    var myVar = 2;
    secondF();
}

var myVar = 1;
firstF();
*/

// 2
function firstF() {
    function secondF() {
        console.log(myVar);
    }
    
    var myVar = 2;
    secondF();
}

var myVar = 1;
firstF();
// w fazie kreacji kontekstu funkcja secondF nie została
// zadeklarowana, bo nie ma jej w kontekście global,
// pojawi się w kontekście funkcji firstF
// secondF();
