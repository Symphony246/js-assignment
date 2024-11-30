let t = 0;
let n=0;
let i = 8;
for (i; i < 100; i++) {
t=i%10;
n=Math.floor(i/10)
if(t===n){
    console.log(i);
    
}
}