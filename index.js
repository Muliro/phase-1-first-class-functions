function receivesAFunction(callback){ //receives a function as its argument
    return callback();
}
receivesAFunction(function(){return 4 + 5;});



const foo = () => 4 + 5;

function returnsANamedFunction(){  //returns a named function
    return foo;
}

const anon = function(){
    return 4 + 5;
}

function returnsAnAnonymousFunction(){
    return function(){
        return 4 + 5;
    }
}
