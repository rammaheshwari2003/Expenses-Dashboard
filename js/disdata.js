async function add(){

    let totalIncome=Number(document.getElementById("toInc").innerHTML);

    let Table=`<table width="100%" border="1" bgcolor="#DADADA">
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
                  <td Color="black> 
                     
                     <a href="#" onclick="editDisplay('${key.id}')">
                     <i class="fa-solid fa-pen-to-square" id=ed></i>
                     </a>
                     </td>
                  <td Color="black>
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





function mydel(myid)
{
  let api=`http://localhost:3000/Income/${myid}`

  fetch(api, { method: 'DELETE' }).then((res)=>{
    alert("Record Deleted");
  })
  
}









async function editSave(id){

  let src= document.getElementById("source").value ;
  let amt=document.getElementById("amount").value ;
  let dt=document.getElementById("date").value ;

  let api=`http://localhost:3000/Income/${id}`;

  fetch(api, {
    method: "PATCH",
    headers: {
        "Content-Type" : "application/json"
      },
    body: JSON.stringify(
      {
        source: src,
        amount: amt,
        date: dt,
      }
    )
  })
  .then(json => {
    alert("Data updated!!!");
  });
}

async function editDisplay(myid)
{
  let api=`http://localhost:3000/Income/${myid}`

  let Obj= await fetch(api);
  let Data=await Obj.json();
  
  myForm=`
          Source : <input type="text" id="source" value="${Data.source}">
          
           Amount : <input type="number" id="amount" value="${Data.amount}">
        
           Date : <input type="date" id="date" value="${Data.date}">
        
          <button onclick="editSave('${Data.id}')"> Edit Save </button>
  `
  document.getElementById("income-form").innerHTML=myForm;
}



