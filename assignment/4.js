let n=30;
let x=3;
let sum=0;
let fact=1;
for(let i=3; i<=2*n-1; i+=2){
    fact=i*fact
    sum+=Math.pow(x,i)/fact;
}
console.log(sum);
