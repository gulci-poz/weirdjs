// BY VALUE (dla prymitywnych typów)

// a wskazuje na komórkę pamięci, gdzie jest zapisana wartość 3
var a = 3;

// ta sama wartość jest zapisana w nowej komórce pamięci i na tę komórkę wskazuje b
// dotyczy też przekazywania do funkcji
var b = a;
a = 2;

console.log('a: ' + a);
console.log('b: ' + b);


// BY REFERENCE (dla obiektów, również funkcji)

// obj wskazuje na komórkę pamięci, gdzie jest zapisany obiekt
var obj = { greeting : 'hi' };

// ref wskazuje na to samo miejsce w pamięci co obj
// dotyczy też przekazywania do funkcji
var ref = obj;

obj.greeting = 'hello'; //mutate

console.log('obj: ' + obj.greeting);
console.log('ref: ' + ref.greeting);

function changeGreeting(obj) {
    obj.greeting = 'hola';
}

// przekazujemy referencję
changeGreeting(ref);

console.log('obj: ' + obj.greeting);
console.log('ref: ' + ref.greeting);

// operator = ustawia nowe miejsce w pamięci
// chyba, że jest przypisanie istniejącego obiektu
// wtedy po prostu zmienia się referencja
obj = { greeting : 'howdy' };

// obj wskazuje na nowe miejsce w pamięci
// ref nadal wskazuje na poprzednie miejsce
// trzeba by znów dać
//ref = obj;
console.log('obj: ' + obj.greeting);
console.log('ref: ' + ref.greeting);
