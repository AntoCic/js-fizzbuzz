console.log("- START -");

// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che:
//  - per i multipli di 3 stampi “Fizz” al posto del numero e
//  - per i multipli di 5 stampi “Buzz” al post del numero.
//  - Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.

const totalNumber = 100;
for (let i = 1; i <= totalNumber; i++) {
    let outcome="";
    if ( i % 3 == 0) {
        outcome += "fizz";   
    }
    if ( i % 5 == 0) {
        outcome += "buzz";   
    }
    if (!outcome) {
        outcome = i;
    }

    console.log(outcome);
    
}