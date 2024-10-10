function Reverse_int(n: number): string {
    let res= ""
    for (let i=n; i>0; i--) {
        res+= i+""
    }
    return res
}
console.log(Reverse_int(5))