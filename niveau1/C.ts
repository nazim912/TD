function mult_table(n:number):string{
    let res =""
    for(let i=0;i<n;i++){
        res+=(i+1)*n+""+'\n'
    }
    return res
}
console.log(mult_table(9))