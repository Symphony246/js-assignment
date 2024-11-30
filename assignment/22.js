let radius=5;
let count=0;
let i=-5;
let j=-5;
for(i;i<=5;i++){

    for(j;j<=5;j++){
        if(i*i+j*j<=radius*radius){
            count++
        }
    }

}
console.log(count);
