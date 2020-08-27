// Array
var numeri = [];
// Numeri da 1 a 100
for (i=1; i<=100; i++){
  numeri.push(i);
  var posizioneNumero = numeri.indexOf(i);
  if  (i % 3 == 0 && i % 5 == 0 ) {
    numeri[posizioneNumero] = "FizzBuzz";
  }
  else if (i % 5 == 0) {
    numeri[posizioneNumero] = "Buzz";
  }
  else if(i % 3 == 0) {
    numeri[posizioneNumero] = "Fizz";
  }
}

document.getElementById("risultato").innerHTML = numeri
