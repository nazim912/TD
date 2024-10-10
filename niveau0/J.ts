function Delta1 (a:number,b:number,c:number):number{
    let D=(b**2)-(4*a*c);
    return D
}
function Root(a:number,b:number,c:number):number[]|undefined{
    let D = Delta1(a,b,c);
    if(D<0){
        return undefined
    }
    if(D===0){
        let root=-b/(2*a);
        return [root]
    }
    if(D>0){
        let root1 = (-b+Math.sqrt(D))/(2*a);
        let root2 = (-b-Math.sqrt(D))/(2*a);
        return [root1,root2]
    }
}
console.log(Root(1,-2,1))
console.log(Root(1,2,3))
