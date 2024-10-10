function is_prime(n:number):boolean{
    for(let i=2;i<n;i++){
    if(n%i==0){
        return false
    }
    }
    return true
}
console.log(is_prime(13))
console.log(is_prime(20))