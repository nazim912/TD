function Pgcd(a:number,b:number):number{
    if(b===0){
        return a
    }
    return Pgcd(b,a%b)
}
console.log(Pgcd(21,14))