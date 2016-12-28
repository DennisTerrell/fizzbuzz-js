for (var i=1; i<= 100; i++){

  var fizzBuzzNumber = '';

  if (i % 3 !== 0 && i % 5 !==0){
    fizzBuzzNumber += i;
  }
  if (i % 3 === 0){
    fizzBuzzNumber += 'Fizz';
  }
  if (i % 5 === 0){
    fizzBuzzNumber += 'Buzz';
  }
    console.log(fizzBuzzNumber);
}
