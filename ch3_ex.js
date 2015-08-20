var a = 4 > 3;
console.log(a);

function test() {
    // tak zadeklarowana zmienna jest globalna
    b = 10;
}

test();
console.log(b);

var c = 2, d = 3, e = 4;

// right-to-left
// d jest przypisywana wartość e, wartość e jest zwracana,
// c jest przypisywana zwrócona wcześniej wartość (e)
// i ona znów jest zwracana
c = d = e;

console.log(c);
console.log(d);
console.log(e);

console.log('--=== Coercion ===--');

// silnik JS zgaduje na String
var f = 1 + '2';
console.log(f);

//Number(false) //0
//Number(true) //1
// left-to-right
// silnik JS zgaduje na Number
// porównujemy true < 3 oraz false < 1
console.log(1 < 2 < 3); //true
console.log(3 < 2 < 1); //true

// żeby uniknąć nieścisłości, lepiej używać === (nie ma koersji)
console.log(Number(undefined)); //NaN
console.log(Number(null)); //0
console.log(null == 0); // false
console.log(false === 0); //false
console.log(true === 1); //false
console.log('' == 0); //true
console.log('' == false); //true

// np. if robi taką konwersję
// wszystko jest false
console.log('Boolean(undefined) ' + Boolean(undefined));
console.log('Boolean(null) ' + Boolean(null));
console.log('Boolean(\'\') ' + Boolean(''));
console.log('Boolean(NaN) ' + Boolean(NaN));
console.log('Boolean(0) ' + Boolean(0));

// jeśli chcemy, żeby 0 było prawdą
// oba są left-to-right, najpierw ===
if (a || a === 0) {
    console.log('a is 0 and it\'s true');
}
