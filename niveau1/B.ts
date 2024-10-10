function sum_int (n:number):number{
    let res = 0 
    for(let i=0;i<n;i++){
        res+=(i+1)
    }
    return res
}
console.log(sum_int(5))