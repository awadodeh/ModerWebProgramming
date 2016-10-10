'use strict';

var EventEmitter = require('events').EventEmitter;
var util = require('util');

//Exercise 1   
    
class Ticker extends EventEmitter{
    constructor(){
        super();
        
    }
    ticker(){
        setInterval(this.emit.bind(this, "tick"), 1000);
    }
}

    //Exercise 2    
    
var ticker = new Ticker();

//listener for the tick event
ticker.on('tick', () => {
  console.log('TICK...');
});

ticker.ticker();