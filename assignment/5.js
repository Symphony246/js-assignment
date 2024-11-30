const data=[
    {name:'Hosein', salary:30000},
    {name:'Mohmad', salary:80000},
    {name:'Amin', salary:1000000},
    {name:'Sina', salary:1500000}
]
data.map(item =>{
 if(item.salary<50000){
   console.log(item.name,':','moaf');
   
 }
 else if(item.salary>50000 && item.salary<100000){
    console.log(item.name,':',50000*10/100);
     
 }
 else{
 console.log(item.name,':',100000*15/100);

 }
})

