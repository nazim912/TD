function Beautiful_mult(n:number):string{
    let res =""
    for(let i=0;i<=10;i++){
        res+=`${n} x ${i} = ${n*i}`+"\n"
}
return res
}
console.log(Beautiful_mult(5))