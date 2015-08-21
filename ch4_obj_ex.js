var sebek = new Object();

// computed member access
sebek['firstname'] = 'Sebastian';
sebek['lastname'] = 'Gulczynski';

var firstNameProperty = 'firstname';

console.log(sebek);
console.log(sebek[firstNameProperty]);

// member access
console.log(sebek.lastname);

sebek.address = new Object();
sebek.address.street = 'Jana Piekalkiewicza 13';
sebek.address.city = 'Poznan';
sebek.address.state = 'wielkopolskie';

console.log(sebek.address.street);
console.log(sebek.address.city);
console.log(sebek['address']['state']);

//object literal
var karolcia = {
    firstname : 'Karolina',
    lastname : 'Gulczynska',
    address : {
        street : 'Jana Piekalkiewicza 13',
        city : 'Poznan',
        state : 'wielkopolskie'
    }
};

console.log(karolcia);

function greet(person) {
    console.log('Hi, ' + person.firstname);
}

greet(karolcia);
greet({firstname : 'Wiktoria', lastname : 'Gulczynska'});

sebek.phone = {
    priv : '888733292',
    work : '503161162'
};

// "namespaces"
var english = {};
var spanish = {};
english.greetings = {};

english.greetings.greet = 'Hello!';
spanish.greet = 'Hola!';

console.log(english.greetings.greet);
