let number=42551;
let h;
let s;
let d;
let y;
let number1;
if(number>0){
    y=number%10
    number1=Math.floor(number/10)
    if(number1>0){
        d=number1%10
        number1=Math.floor(number1/10)
    }
    if(number1>0){
        s=number1%10
        number1=Math.floor(number1/10)
    }
    if(number1>0){
        h=number1%10
        number1=Math.floor(number1/10)
        
        if(y%2===0 &&s%2===0 && d%2!==9 && h%2!==0){
            console.log(number);
         
        }
        else{
            console.log('The number is invalid');
            
        }
       
    }
}