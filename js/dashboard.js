async function dashboard(){

    let tblc=Number(document.getElementById("t-balance").innerHTML);
    let tinc=Number(document.getElementById("t-Income").innerHTML);
    let texp=Number(document.getElementById("t-expenses").innerHTML);

    let api="http://localhost:3000/Income";

    let tincome;
    
    let Obj=await fetch(api)
    let data=await Obj.json();
    data.map((key)=>{
        tincome=Number(`${key.amount}`)
        tblc=tblc+tincome;
    })
    document.getElementById("t-Income").innerHTML=tblc;



    let api2="http://localhost:3000/Expenses";

    let total;
    let texpenses;

    let Obj2=await fetch(api2);
    let data2=await Obj2.json();
    data2.map((key)=>{
        total=Number(`${key.Amount}`);
        tinc=tinc+total;
        texp=texp+total;
    })

    document.getElementById("t-balance").innerHTML=tblc-tinc
    document.getElementById("t-expenses").innerHTML=tinc
    
}
dashboard();