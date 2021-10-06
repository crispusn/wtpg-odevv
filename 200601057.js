function toplama(a, b){
 
 ilkSayi =  parseInt(document.getElementById("a").value);

ikinciSayi  =  parseInt(document.getElementById("b").value);
 
alert((ilkSayi) + (ikinciSayi));

}

function cikarma(a, b){
 
    ilkSayi =  parseInt(document.getElementById("a").value);
   
   ikinciSayi  =  parseInt(document.getElementById("b").value);
    
   alert((ilkSayi) - (ikinciSayi));
   
   }

   function carpma(a, b){
 
    ilkSayi =  parseInt(document.getElementById("a").value);
   
   ikinciSayi  =  parseInt(document.getElementById("b").value);
    
   alert((ilkSayi) * (ikinciSayi));
   
   }

   function bolme(a, b){
 
    ilkSayi =  parseInt(document.getElementById("a").value);
   
   ikinciSayi  =  parseInt(document.getElementById("b").value);
    
   alert(((ilkSayi) / (ikinciSayi)).toFixed(2));
   
   }