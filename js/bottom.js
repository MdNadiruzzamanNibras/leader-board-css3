function bottun(incresing){
    const bottum = document.getElementById("btn-number");
    const btnNum =bottum.value;
   
     if (incresing ==true && btnNum<=5){
        btnNum =  parseInt(btnNum )+ 1;
     }
     else if(btnNum>0) {
         btnNum = parseInt(btnNum )- 1;
     
  }
     bottum.value = btnNum;
  }
 document.getElementById('btn-plus').addEventListener('click', function(){
 
         bottun(true)
 })
 
 document.getElementById('btn-minus').addEventListener('click', function(){
     bottun(false)
  })