console.log("- START -");

// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che:
//  - per i multipli di 3 stampi “Fizz” al posto del numero e
//  - per i multipli di 5 stampi “Buzz” al post del numero.
//  - Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.
const rowE = document.getElementById("row");
const totalNumber = 100;
for (let i = 1; i <= totalNumber; i++) {
  const col_autoE = document.createElement("div");
  col_autoE.classList.add("col-auto");

  const outcomeE = document.createElement("p");
  outcomeE.classList.add("ms_box");

  let outcome = "";
  if (i % 3 == 0) {
    outcome += "fizz";
    outcomeE.classList.add("fizz_box");
  }
  if (i % 5 == 0) {
    outcome += "buzz";
    outcomeE.classList.add("buzz_box");
  }
  if (!outcome) {
    outcome = String(i);
  }

  console.log(outcome);

  outcomeE.innerHTML = outcome;

  col_autoE.appendChild(outcomeE);
  rowE.appendChild(col_autoE);
}
