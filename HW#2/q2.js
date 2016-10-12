"use strict";

var Arr1 = [1,1,2,2,3,8,4,6],
    odd=[],
    even=[];

    for(let i=0;i<Arr1.length;i++){
        if((Arr1[i]+2)%2==0){
            even.push(Arr1[i]);
        }else{
            odd.push(Arr1[i]);
        }

    }

    console.log(odd);
    console.log(even);
