function greet(firstname, lastname, language) {
    
    // ustawienie domyślnego parametru
    language = language || 'pl';
    
    if(arguments.length < 3) {
        console.log('Missing ' + (3 - arguments.length) + ' arguments');
    }
    else {
        console.log('All arguments passed');
    }
    
    console.log('>>');
    
    console.log(firstname);
    console.log(lastname);
    console.log(language);
    
    // array-like, okrojona tablica JS,
    // można się odwoływać przez []
    console.log(arguments);
    console.log('---------------');
}

// hoisting działa
// undefined x 3
greet();

greet('sebastian');
greet('sebastian', 'gulczynski');
greet('sebastian', 'gulczynski', 'en');
