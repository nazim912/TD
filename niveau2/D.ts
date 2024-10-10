function Int_pyramid(n:number):string{
    let res =""
    for(let i= 0; i< n; i++){
        if(res!=undefined){
        res+=(i+1)+""
        }
    }
    return res
}
function Triangl(h:number):void{
    for(let i=0; i<h; i++){
        let ligne= Int_pyramid(i+1);
        console.log(ligne)
    }
}
console.log(Triangl(3))