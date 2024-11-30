const dayinMonth=[31,31,31,31,31,31,30,30,30,30,30,29];
let n=365;
let month=0;
let day=n;
while(day>dayinMonth[month]){
    day-=dayinMonth[month]
    month++
}
let result=(month+1)+'/'+day;
console.log(result);

