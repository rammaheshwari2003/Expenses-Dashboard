async function addExp(){


    let tI=Number(document.getElementById("toIncome").innerHTML);



        let api="http://localhost:3000/Income";

 
        let s1;
        let s2;
        let s3;
 
        let obj=await fetch(api);
        let mydata=await obj.json();
    
        mydata.map((key)=>{
            s1=`${key.source}`
            s2=Number(`${key.amount}`)
            s3=`${key.date}`
            tI=tI+s2;
        })

        document.getElementById("toIncome").innerHTML=tI;
        document.getElementById("balance").innerHTML=tI;






    let exp=Number(document.getElementById("ex-pro").innerHTML);
    
    let Table=`<table width="100%" border="1" bgcolor="#DADADA">
    <tr bgcolor="orange">
      <th> Name </th>
      <th> Category </th>
      <th> Amount </th>
      <th> Date </th>
      <th> Edit </th>
      <th> Delete </th>
     </tr> `

        let api2="http://localhost:3000/Expenses";

 
        let e1;
        let e2;
        let e3;
        let e4;

        let obj2=await fetch(api2);
        let mydata2=await obj2.json();
    
        mydata2.map((key)=>{
            e1=`${key.Name}`
            e2=`${key.Category}`
            e3=Number(`${key.Amount}`)
            e4=`${key.Date}`
            exp=exp+e3;

            Table+=` <tr>
            <td> ${key.Name} </td>
            <td> ${key.Category} </td>
            <td> ${key.Amount} </td>
            <td> ${key.Date} </td>
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
          </tr>  `
        })
        Table+="</table>"
        document.getElementById("ex-tb-data").innerHTML=Table;


        document.getElementById("ex-pro").innerHTML=exp;

        document.getElementById("balance").innerHTML=tI-exp;



        let enbl=Number(document.getElementById("balance").innerHTML);
        let empt=Number(document.getElementById("ex-pro").innerHTML);
        if(enbl===0){
          alert("Your Balance is Zero");
          document.getElementById("balance").innerHTML=0;
        }else if(enbl<empt){
          alert("insufficient balance , Please add balance"); 
        }
} 
addExp();




function mydel(myid)
{
    let api2=`http://localhost:3000/Expenses/${myid}`;

  fetch(api2, { method: 'DELETE' }).then((res)=>{
    alert("Record Deleted");
  })
  
}












async function editSave(id){

    let Name= document.getElementById("Name").value ;
    let Category= document.getElementById("Category").value ;
    let Amount=document.getElementById("Amount").value ;
    let Date=document.getElementById("Date").value ;
  
    let api2=`http://localhost:3000/Expenses/${id}`;
  
    fetch(api2, {
      method: "PATCH",
      headers: {
          "Content-Type" : "application/json"
        },
      body: JSON.stringify(
        {
          Name: Name,
          Category: Category,
          Amount: Amount,
          Date:Date,
        }
      )
    })
    .then(json => {
      alert("Data updated!!!");
    });
  }
  
  async function editDisplay(myid)
  {
    let api2=`http://localhost:3000/Expenses/${myid}`
  
    let Obj= await fetch(api2);
    let Data=await Obj.json();
    
    myForm=`
            Name : <input type="text" id="Name" value="${Data.Name}">
            
            <label for="Catg">Category : </label>
                <select id="Category" >
                    <option>Select</option>
                    <option value="cloth">Clothing</option>
                    <option value="food">Food</option>
                    <option value="grocery">Grocery</option>
                    <option value="education">Education</option>
                    <option value="other">Other</option>
                </select>

             Amount : <input type="number" id="Amount" value="${Data.Amount}">
          
             Date : <input type="date" id="Date" value="${Data.Date}">
          
            <button onclick="editSave('${Data.id}')"> Edit Save </button>
    `
    document.getElementById("expen-form").innerHTML=myForm;
  }
  
      //  Amount : <input type="text" id="Category" value="${Data.Category}">

  
  
