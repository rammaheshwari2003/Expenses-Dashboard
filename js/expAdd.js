document.getElementById("exp-form").addEventListener("submit", async function(events) { 

    let nm=document.getElementById("name").value;
    let ctg=document.getElementById("Catg").value;
    let amt=Number(document.getElementById("e-amount").value);
    let dt=document.getElementById("date").value;      
   

    let api="http://localhost:3000/Expenses";

    const response=await fetch (api,{
        method:"POST",
        body:JSON.stringify({
            "Name":nm,
            "Category":ctg,
            "Amount":amt,
            "Date":dt
        }),
        headers:{
            "Content-Type": "application/json",
        }
    });
    
});