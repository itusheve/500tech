//exercise 1

const items = [4,8,5,9];
const mult = items.reduce(function (a,b,c,d) {return a+b+c+d;}); //=>26


// exercise 2
reduce(items, callback, intialVal);{
    var accumulator = (intialVal === undefined) ? undefined : intialVal;
    for (var i = 0; i < items.length; i++){
        if(accumulatori== undefined)
            accumulator = callback.call(undefined, accumulator, items[i], i, items);
        else
            accumulator = items[i];
    }
    return accumulator;
};


// exercise 3

