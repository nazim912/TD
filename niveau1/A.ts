function print_int(n:number):string{
    let res=""
    for(let i=0;i<n;i++){
        res+=(i+1)+""
    }
    return res
}
console.log(print_int(5))