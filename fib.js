function fibonacci(n){
    const fib = [0,1];
    
    for(let i =2; i< n; i++){
        fib[i] = fib[i -1] + fib[i -2];
    }

    return fib;
}

function fibRecursion(n){
    if (n < 2) {
        return n;
    }

    return fibRecursion(n - 1) + fibRecursion(n - 2);
}

console.log(fibonacci(2));
console.log(fibRecursion(7));