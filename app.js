var person = new Object();

// computed member access
person['firstname'] = 'Sebastian';
person['lastname'] = 'Gulczynski';

var firstNameProperty = 'firstname';

console.log(person);
console.log(person[firstNameProperty]);

// member access
console.log(person.lastname);

person.address = new Object();
person.address.street = 'Jana Piekalkiewicza 13';
person.address.city = 'Poznan';
person.address.state = 'wielkopolskie';

console.log(person.address.street);
console.log(person.address.city);
console.log(person['address']['state']);
