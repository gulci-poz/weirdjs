//var arr = new Array();

var arr = [
    1,
    false,
    {
        name : 'gulci',
        address : '13 gulci av.'
    },
    function(name) {
        var greeting = 'Hello ';
        console.log(greeting + name);
        // this wskazuje na arr
        console.log(this);
        
        var internal = function() {
            // przy drugim zagnieżdżeniu this wskazuje
            // na window
            console.log(this);
        }
        
        internal();
    },
    'hello'
];

console.log(arr);
arr[3](arr[2].name);
