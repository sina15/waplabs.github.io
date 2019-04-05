

/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, function2test) {
    if (expected === function2test()) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + function2test();
    }

}

/* max returns the maximum of 2 arguments */
function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }

}
console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, function () {
    return max(20, 10);
}));

/* max3 takes 3 numbers as arguments and returns the largest */
function maxOfThree(a, b, c) {
    return max(max(a, b), c);

}

console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, function () {
    return maxOfThree(5, 4, 44);
}));
console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, function () {
    return maxOfThree(55, 4, 44);
}));
console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(4, function () {
    return maxOfThree(55, 4, 44);
}));


function isVowel(x){
    if(x=="a"){

        return true;
    }else{

        return false;
    }
}

console.log("Expected output of isVowel(a) is true:  " + myFunctionTest(true, function () {
    return isVowel("a");
}));


function sum(numbers){
    var sum =0;
   for(var i=0;i<numbers.length;i++){

       sum+=numbers[i];
   }

   return sum;
}

console.log("Expected output of sum([1,2,3,4,5}]) is 15:  " + myFunctionTest(15, function () {
    return sum([1,2,3,4,5]);
}));

function multiply(numbers){
    var prod =1;

    for(var i=0; i<numbers.length;i++){
        prod*=numbers[i]
    }

    return prod;
}


console.log("Expected output of multiply([1,2,3}]) is 6:  " + myFunctionTest(6, function () {
    return multiply([1,2,3]);
}));


function reverse(s){

    var result ="";

    for(var i=s.length-1;i>=0;i--){

        result+=s.charAt(i);
    }

    return result;
}

console.log("Expected output of reverse(sinayobye) is eyboyanis:  " + myFunctionTest("eyboyanis", function () {
    return reverse("sinayobye");
}));

function findLongestWord(words){

    var result = 0;

    words.forEach(function (elem) {
        if(elem.length>result){
            result = elem.length
        }
    })

    return result;
}

console.log("Expected output of findLongestWord([sina,chris,li]) is 5:  " + myFunctionTest(5, function () {
    return findLongestWord(["sina","chris","li"]);
}));


function filterLongWords(words,n){

    return  words.filter(function (elem,i,array) {

       return elem.length>n;
              })

}

console.log("Expected output of findLongestWord([sinayobye,christopher,li]) is sinayobye,christopher:  " + myFunctionTest(["sinayobye","christopher"], function () {
    return filterLongWords(["sinayobye","christopher","li"]);
}));


function withMap(numbers){

    return numbers.map(function (elem,i,array) {

        return elem+10;
    });
}

console.log("Expected output of withMap([2,3,4,5,6,7]) is [12,13,14,15,16,17]:  " + myFunctionTest([12,13,14,15,16,17], function () {
    return withMap([2,3,4,5,6,7]);
}));


function elementEqualtothree(numbers){

     numbers.filter(function(elem,i,array){

        return elem==3;
    })
}

console.log("Expected output of elementEqualtothree([2,3,4,5,6,7,5,3,7,2,4,3]); is [3,3,3]:  " + myFunctionTest([3,3,3], function () {
    return elementEqualtothree([2,3,4,5,6,7,5,3,7,2,4,3]);
}));


function productofAll(numbers){

     return numbers.reduce(function(acc,elem,i,array){
        return acc*elem;
    });
}


console.log("Expected output of productofAll([2,4,10]) is 80:  " + myFunctionTest(80, function () {
    return productofAll([2,4,10]);
}));





