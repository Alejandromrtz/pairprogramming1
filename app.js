// // paired programming 
// // easy mode (1)
// created a arrow function with params of arr.
// created a array inside of variable arr
  numberSort = (arr) => {

    var arr = [1,2,3,4,5,6,7,8,9,10];
    // filters out the array and checks if number divided by 2 is = 0, if so it'll log even numbers
    let evenNumbers = arr.filter(number => number % 2 == 0);
    console.log("Even numbers: " + evenNumbers);
  //same as line 8 but odd numbers.
     let oddNumbers = arr.filter(number => number % 2 !== 0);
    console.log("Odd numbers :" + oddNumbers);
  }
  //runs the function.
   numberSort();

// // easy 2
//we created an array to store numbers to start off.
var arr = new Array(10, 18, 19, 29, 33, 35, 47, 66, 83);

// we created a method to find the prime number from the area to store into a new array. 
function findPrime(arr){
   var prime = [];//variable that is set to hold prime numbers.
   var count=0;
   //we created a for loop that goes through the array.
   for(var i = 0 ; i < arr.length; i++){
       var flag = 0;//flag var
       //we created an for loop to find the prime number 
       for(var j = 2 ; j <= arr[i] / 2;j++){  
        if(arr[i] % j === 0){
               flag = 1;
               break;
           }
       }
       if(flag === 0){//if flag = 0, then that number is prime
           prime[count++] = arr[i]; //stores number in prime variable we created.
       }
   }//display prime[] on console
   console.log('Prime number are: ')
   console.log(prime);
}
findPrime(arr);//calling findPrime()

// // medium mode (1)
// we created an arrow function named vowelCheck
// inside we have a if statement checks if parameter length is equal to 1.
 vowelCheck =(char) => {
    if(char.length == 1) {
        //we created a array to check vowels
    var vowels = new Array('a', 'e', 'i', 'o','u');
    var vowelCheck = false;
    //created a for loop 
    for (a in vowels) {
        if(vowels[a] == char) {
        vowelCheck = true;
     }
    }
    return vowelCheck;
    }
 }
 //return the whole function, vowelCheck.
 console.log(vowelCheck('a'));
 
    
// medium mode (2)
//created an arrow function. set the parameters of a, b. 
 anagramString = (a, b) =>  {
//creates notification if lengths aren't equal.
    let len1 = a.length;
    let len2 = b.length;
    if(len1 !== len2){
       console.log('Invalid Input');
       return
    }
    //it splits the string sorts it and joins it back into a string
    let str1 = a.split('').sort().join('');
    let str2 = b.split('').sort().join('');
    // if string 1 is equal to string 2 then it runs true if not it's false.
    if(str1 === str2){
       console.log("True");
    } else { 
       console.log("False");
    }
 }
 //runs anagramString function with a, b (indian, ndiani);
 anagramString("indian","ndiani");

 //learned about line breaks in the console log.
console.log('\n');


// // // medium mode (3)

 gcd_two_numbers = (x, y) => {
     // checks if x is not equal to 'number' OR if y is not equal to 'number' then return false
    if ((typeof x !== 'number') || (typeof y !== 'number')) 
      return false;

      //abs runs the absolute value of a number, numbers being x,y.
    x = Math.abs(x);
    y = Math.abs(y);
    //while loop
    while(y) {
        //create variable for n
      let n = y;
      y = x % y;
      x = n;
    }
    return x;
  }
  
  console.log(gcd_two_numbers(336, 360));
  console.log(gcd_two_numbers(9, 3));

//basically line breaks in the terminal.
 console.log('\n');
  

// // // medium mode (4)
// created an object and listed properties : make, model, etc
let Car = {
    make: 'Chevy',
    model: 'Silvarado',
    year: 2015,
    milage: '',
    color: 'red',
    // we created a driveToWork function.
    driveToWork: function () {
        console.log('driveToWork');
        // setting milage to 2033
        //this allows us to grab the milage property and lets us tweak it. 
        this.milage = '2033 miles'
        // console.log('old Milage : ' + this.milage);
        console.log('Old Milage : ' + this.milage);
    },
    // we created driveAroundTheWorld function.
    driveAroundTheWorld: function () {
        console.log('driveAroundTheWorld');
        // printing old milage
        console.log('Old milage : ' + this.milage);
        // setting new milage to 26033 miles
        this.milage = ' 26033 miles'
        console.log('New Milage : ' + this.milage);
    },
    // we created a function for run errands to console log all the methods.
    runErrands: function () {
        console.log("runErrands");
        // printing old milage
        console.log("Old milage : " + this.milage);
        // adding 30 miles to milage.
        this.milage = '26063 miles'
        console.log('New Milage : ' + this.milage);
    }
}
// calling method
Car.driveToWork()
Car.driveAroundTheWorld()
Car.runErrands()




// // hard mode (1)
//a function that takes in a string and returns a boolean value
//whether or not the string contains a pair of matching brackets ({}, [], ())

let matchParanthesis = (input) => {
    //deeclare and initialize braces with all type of opening and closing bracket pairwise
    let braces = "{}[]()"
    let stack = [] //stores brakets inside of let stack.
    //for .. of loop , we basically replaced input instead of brakt. 
    for(let brakt of input) {
    //finds index brakt 
      let braktsIndex = braces.indexOf(brakt)
      
    //   console.log(input);
    //   console.log('--------------------');
    //   console.log(brakt);
    

      //stack would add index of opposite index i.e, for '(', stack push index of')' from braces
      if(braktsIndex % 2 === 0) {
        stack.push(braktsIndex + 1)
      } else { //otherwise, if popped against the braket index of correct closing braces
        if(stack.pop() !== braktsIndex) {
          return false; //return false
        }
      }
    }  //length of stack becomes 0, then return true
    return stack.length === 0
   }
   console.log(matchParanthesis('(]')) // returns false
   console.log(matchParanthesis('[]')) // returns true
   console.log(matchParanthesis('{}')) // returns true
   console.log(matchParanthesis('{[]}')) // returns true
  