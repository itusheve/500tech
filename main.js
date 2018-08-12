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

class EventEmitter {
    constructor(){
        this.event = {};
    }
    on(eventName, callback){
        if (typeof is.events[eventName] !== 'object') {
            this.events[eventName] = [];
        }

        this.events[eventName].push(callback);
    }

    emit(eventName, payload) {
        if (this.events[eventName]){
            this.events[eventName].forEach((callback) => {
                callback(payload);
            });
            } else {
            console.log("this event doesn't excies");
        }
    }

    off(eventName,callback){
        var index;

        if (typeof this.events[eventName] === 'object'){
            index = this.events[eventName].indexOf(callback);

            if (ndex > -1){
                this.events[eventName].aplice(index, 1);
            }
        }
    }
}