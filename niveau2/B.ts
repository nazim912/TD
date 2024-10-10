function Rectongle(m:number,n:number):string{
    let res =""
    for(let i=0;i<n;i++){
    for(let j=0;j<m;j++){
        res+='*'
    }
    res+="\n"
}
    return res
}
console.log(Rectongle(5,5))