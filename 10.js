let sum=0;
for(let i=3;i<1000;i++){
    for(let j=1;j<i/2;j++){
        if(i%j===0){
            sum+=j;
        }
    }
    if(i%2!==0 || sum===i){
        console.log(i);
        
    }
}