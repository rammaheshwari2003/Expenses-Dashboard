document.getElementById("income-form").addEventListener("submit", async function(event) { event.preventDefault();

    let totalIncome=Number(document.getElementById("toInc").innerHTML);

        let src=document.getElementById("insrc").value;
        let amt=Number(document.getElementById("icamount").value);
        let dt=document.getElementById("icdate").value;      
        
        totalIncome=totalIncome+amt;
        document.getElementById("toInc").innerHTML=totalIncome;
        alert("Your income is add");
    
        document.getElementById("income-form").reset();



        let api="http://localhost:3000/Income";

        const res=await fetch (api,{
            method:"POST",
            body:JSON.stringify({
                "source":src,
                "amount":amt,
                "date":dt
            }),
            headers:{
                "Content-Type": "application/json",
            }
        });


 

        
});



async function add(){

    let api="http://localhost:3000/Income";


    let store;
    let d;
    let d1;

    let obj=await fetch(api);
    let mydata=await obj.json();

    mydata.map((key)=>{
        store=`${key.source}`
        d=Number(`${key.amount}`)
        d1=`${key.date}`
        
    })
    document.getElementById("demo").innerHTML=store;
    document.getElementById("demo2").innerHTML=d;
    document.getElementById("demo3").innerHTML=d1;
    

} 
add();