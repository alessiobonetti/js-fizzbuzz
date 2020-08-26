// Array
var numeri = [];
// Numeri da 1 a 100
for (i=1; i<=100; i++){
  numeri.push(i);
  if  (i % 3 == 0 && i % 5 == 0 ) {
    var posizioneNumero = numeri.indexOf(i);
    numeri[posizioneNumero] = "FizzBuzz";
  }
  else if (i % 5 == 0) {
    var posizioneNumero = numeri.indexOf(i);
    numeri[posizioneNumero] = "Buzz";
  }
  else if(i % 3 == 0) {
    var posizioneNumero = numeri.indexOf(i);
    numeri[posizioneNumero] = "Fizz";
  }
}
console.log(numeri);
