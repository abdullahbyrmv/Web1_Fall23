function isPrime(n) {
    
    if (n < 2) {
      return false;
    }
    if (n < 4) {
      return true;
    }
    if (n % 2 === 0 || n % 3 === 0) {
      return false;
    }
  
    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) {
        return false;
      }
    }
    return true;
  }
  
  let a = prompt("Enter first number:");
  let b = prompt("Enter second number:");
  
  for (let i = a; i <= b; i++) {
      if (isPrime(i)) {
        console.log(i + " ");
      }
  }
  