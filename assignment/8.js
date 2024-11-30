let n=150;
let t=0;
let s=0;
let i=0;
for(i;i<=n;i++){
    t=n%10;
    n=Math.floor(n/10); 
    s+=Math.pow((t*3),i);
}
console.log(s);
