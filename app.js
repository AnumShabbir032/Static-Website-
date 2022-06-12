// Navbar Function
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
// Navbar Function End

// read more button
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

// modal 
var modalImg = document.getElementById("modalImg");
var modalProductName = document.getElementById("modalProductName");
var modalProductDetails = document.getElementById("modalProductDetails");

function openModal(img, prodName) {
  console.log("helloo");
  modalImg.src = img;
  modalProductName.innerHTML = prodName;
}