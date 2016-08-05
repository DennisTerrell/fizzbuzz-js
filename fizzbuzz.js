for (var i=1; i<= 100; i++){ 

  var divideByThree = i % 3 === 0;
  var divideByFive = i % 5 === 0;

  if (divideByThree && divideByFive){
    console.log(i + ' ' + 'FizzBuzz');
  }
  else if (divideByThree){
    console.log(i + ' ' + 'Fizz');
  }
  else if (divideByFive){
    console.log(i + ' ' + 'Buzz');
  }
  else{
    console.log(i);
  }
}
