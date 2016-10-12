"use strict";

var nums = [1,2,34,54,55,34,32,11,19,17,54,66,13];
var evens = [];
var odds = [];

var findEvens = function(nums){
    for (var i = 0; i < nums.length; i++) {

        if ((nums[i] % 2) == 0) {
            evens.push(nums[i]);
        }
        
    }
}

var findOdds = function(nums){
       for (var i = 0; i < nums.length; i++) {

        if ((nums[i] % 2) != 0) {
            odds.push(nums[i]);
        }
        
    }
}


findEvens(nums);

console.log(evens);

