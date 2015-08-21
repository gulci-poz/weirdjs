// nazwa właściwości może być w cudzysłowiu
// w JSON - musi
// JSON to nie to samo co obiekt JS
// JSON jest podzbiorem
// JSON nie może zawierać funkcji

// mamy obiekt, robimy String JSON
var objectLiteral = {
    firstname : 'gulci',
    isProgrammer : true
};

var objToJsonString = JSON.stringify(objectLiteral);
console.log(objToJsonString);

// mamy String JSON, robimy obiekt
var personRecJsonString =
    '{"firstname" : "John", "isProgrammer" : true}';

var jsonStringToObj = JSON.parse(personRecJsonString);

console.log(jsonStringToObj);
