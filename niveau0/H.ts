function Is_leap(year:number):boolean{
    if(year%4===0){
        if(year%100===0){
            return false 
        }
    }
        if(year%400===0){
            return true
        }
        return true
}
console.log(Is_leap(2024))