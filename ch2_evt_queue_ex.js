function waitThreeSeconds() {
    var ms = 3000 + new Date().getTime();
    
    while (new Date() < ms) {
        // do notning, just wait
    }
    
    console.log('waitThreeSeconds execution finished');
}

function clickHandler() {
    console.log('clickHandler execution');
}

document.addEventListener('click', clickHandler);

waitThreeSeconds();
console.log('global context execution finished');