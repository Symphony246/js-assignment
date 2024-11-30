for(let i=100;i<=1000;i++){
    let y;
    let new_i;
    let d;
    let s;
    if(i>0){
         y=i%10
        new_i=Math.floor(i/10)
        if(new_i>0){
             d=new_i%10
            new_i=Math.floor(new_i/10)
        }
        if(new_i>0){
             s=new_i%10
            new_i=Math.floor(new_i/10)
            if(y===s && d%2===0){
                console.log(i);
                
            }
        }
    }

}