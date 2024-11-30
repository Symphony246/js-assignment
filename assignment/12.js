let low=1;
let high=1000;
const target=270;
while(low<=high){
    let mid=Math.floor((low+high)/2);
    
    if(mid===target){
        console.log('found the number :',target)
       return mid
    }
    else if(mid<target){
        low=mid+1
    }
    else if(mid >target){
        high=mid-1
     
    }
    else if(!(mid===target || mid>target || mid<target)){
    
        console.log('numbet not found')
    }
   
}
