// Do not change any of the function names

// solve these recursively

function nFactorial(n) {
  // return the factorial for n
  // example:
  // the factorial of 3 is 6 (3 * 2 * 1)
 //recursive

 if (n == 0) {
   return 1;
 }else{
  return n * nFactorial( n - 1 );
     }

   } 

    

    


function nFibonacci(n) {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n == 0 || n == 1)
  {
      return n * nFractorial(n-1);
  }
}
// Do not modify code below this line.
// --------------------------------

module.exports = {
  nFactorial: nFactorial,
  nFibonacci: nFibonacci,
};
