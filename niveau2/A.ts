function Triangle(h: number): string {
    let res = "";
    for(let i=0; i<h; i++) {
        let ligne = "";
        for(let j = 0; j < i; j++) {
            ligne += '*';
        }
        res+=ligne+"\n";
    }
    return res;
}

console.log(Triangle(5));