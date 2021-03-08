var element = document.getElementById("basicprice");
function togglePrice() {

    if (checkbox1.checked == false){
   element.innerHTML= "$120.00";
  } else {
      element.innerHTML ="$19.99";
    }
};

// document.getElementById("basic").innerHTML = "$50.00";

// document.getElementById("professional").innerHTML = "$100.00";document.getElementById("master").innerHTML = "$150.00";