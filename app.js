// Filter Function

function filterBrands() {

  var filterValue, input, bzdiv,bznm,bzdes,i;

  input = document.getElementById('filter');
  filterValue = input.value.toUpperCase();
  bzdiv = document.querySelectorAll(".bz-div");
  bznm = document.querySelectorAll(".bz-nm");
  bzdes = document.querySelectorAll(".bz-des");

  for (i = 0; i < bz_des.length; i++) {
    var a = bzdes[i]document.querySelectorAll(".bz-nm")[0];
    if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
      bzdiv[i].style.display ="";
    }else{
          bzdes[i].style.display ="none"
    }
  }
}
