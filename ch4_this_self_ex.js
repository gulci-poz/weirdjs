// w tych przypadkach każdy kontekst (global, a, b)
// dostaje swoje this, ale każde z nich wskazuje na to samo
// miejsce w pamięci (global object)

console.log('global:');
console.log(this);

function a() {
    console.log('function statement a:');
    console.log(this);
    this.newVar = 'halo';
}

var b = function() {
    console.log('function expression b: ');
    console.log(this);
    this.newVar = 'hola';
}

// zmienna jest utworzona dopiero w funkcji a(),
// widzimy, że jest undefined, ale potrzebujemy this
console.log(this.newVar);

// tutaj już widzimy zmienną i nie potrzebujemy this
// dla zmiennej na globalnym obiekcie
a();
console.log(newVar);

b();
console.log(newVar);

var c = {
    name : 'The c object',
    log : function() {
        // referencja, bo używamy obiektu
        // mamy referencję do obiektu c i dalej używamy
        // self zamiast this
        var self = this;
        
        // możemy modyfikować zmienne obiektu,
        // w którym znajduje się funkcja
        self.name = 'Updated c object';
        console.log(self);
        
        var setname = function(newName) {
            // tutaj zmieniamy this na globalnym obiekcie
            //this.name = newName;
            //console.log(self);
            self.name = newName;
        };
        
        setname('The c object updated again');
        console.log(self);
    }
};

// tym razem this wskazuje na obiekt, w którym jest funkcja
console.log('c.log execution:');
c.log();
