document.getElementById("btnLogin").addEventListener("click",login);



function login(){
    const username = document.getElementById('uname').value;
    const password = document.getElementById('pwd').value;

  if(username=='ram' && password=='1234'){
    // alert(Login successful, welcome ${username});
    alert("Login successfully")
   window.location.href="dashboard.html";

  }
else{
    alert('Indalid Username or Password')
}

}