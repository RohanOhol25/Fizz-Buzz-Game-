let showfizz=document.getElementById('show');

  function fizzBuzz() {
 let result = document.getElementById('int').value;

        if (result % 3 === 0 && result % 5 === 0) {
          showfizz.innerHTML="FizzBuzz";
        } else if (result % 3 === 0) {
          showfizz.innerHTML=("Fizz");
        } else if (result % 5 === 0) {
          showfizz.innerHTML=("Buzz");
        } else {
          showfizz.innerHTML=(result);
        }
   
}