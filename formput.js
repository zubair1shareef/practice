const form=document.querySelector('#my-form');
const name=document.querySelector('#name');
const email=document.querySelector('#email');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
  if(name.value===""|| email.value===""){
      alert("fill all the fields")
  }
  else{
      console.log(name.value+","+email.value)
  }
})

//comment

