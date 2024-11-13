async function transaction(){

    let Table=`<table width="100%" border="1" bgcolor="#DADADA" >
    <tr bgcolor="cadetblue">
      <th> Title </th>
      <th> Amount </th>
      <th> Date </th>
     </tr> `
     
     let api="http://localhost:3000/Income";

     let obj=await fetch(api);
     let mydata=await obj.json();
    
        mydata.map((key)=>{
        
            Table+=` <tr bgcolor="#green">
                  <td> ${key.source} </td>
                  <td> ${key.amount} </td>
                  <td> ${key.date} </td>
                </tr>   `
            })
           


     let api2="http://localhost:3000/Expenses";

     let obj2=await fetch(api2);
     let mydata2=await obj2.json();
    
        mydata2.map((key)=>{
        
            Table+=` <tr bgcolor="red">
                  <td> ${key.Name} </td>
                  <td> ${key.Amount} </td>
                  <td> ${key.Date} </td>
                </tr>   `
            })
            Table+="</table>"
            document.getElementById("tra-data").innerHTML=Table;
    

}
transaction();

/*
async function add(){

    let totalIncome=Number(document.getElementById("toInc").innerHTML);

    let Table=`<table width="90%" border="1" bgcolor="#DADADA">
    <tr bgcolor="orange">
      <th> Source </th>
      <th> Amount </th>
      <th> Date </th>
      <th> Edit </th>
      <th> Delete </th>
     </tr> 
 `
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
            totalIncome=totalIncome+d;


            Table+=` <tr>
                  <td> ${key.source} </td>
                  <td> ${key.amount} </td>
                  <td> ${key.date} </td>
                  <td> 
                     
                     <a href="#" onclick="editDisplay('${key.id}')">
                     <i class="fa-solid fa-pen-to-square" id=ed></i>
                     </a>
                     </td>
                  <td>
                  <a href="#" onclick="mydel('${key.id}')">
                  <i class="fa-solid fa-trash-arrow-up" id="dicon"></i>
                  </a>
                  </td>
                </tr>  
            `
        })
        Table+="</table>"
        document.getElementById("table-data").innerHTML=Table;


        document.getElementById("toInc").innerHTML=totalIncome;

       


} 
add();

*/