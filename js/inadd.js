document.getElementById("income-form").addEventListener("submit", async function(event) { 

        let src=document.getElementById("insrc").value;
        let amt=Number(document.getElementById("icamount").value);
        let dt=document.getElementById("icdate").value;      


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