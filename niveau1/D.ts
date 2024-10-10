function factoriel(n: number): number {
    let res = 1;
    for (let i = 0; i < n; i++) {
        
        res=res*(i+1);
    }
    return res;
}
console.log(factoriel(4));