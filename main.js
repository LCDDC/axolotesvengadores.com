var currentImage = 1;
var totalImages= 12;

var image=[
    "images/AjolotesVengadoresMayJun23_b-1.png",
    "images/AjolotesVengadoresMayJun23_b-2.png",
    "images/AjolotesVengadoresMayJun23_b-3.png",
    "images/AjolotesVengadoresMayJun23_b-4.png",
    "images/AjolotesVengadoresMayJun23_b-5.png",
    "images/AjolotesVengadoresMayJun23_b-6.png",
    "images/AjolotesVengadoresMayJun23_b-7.png",
    "images/AjolotesVengadoresMayJun23_b-8.png",
    "images/AjolotesVengadoresMayJun23_b-9.png",
    "images/AjolotesVengadoresMayJun23_b-10.png",
    "images/AjolotesVengadoresMayJun23_b-11.png",
    "images/AjolotesVengadoresMayJun23_b-12.png",
];
var currentImage = 1;
var total = 12;


function atras() {
    document.getElementById("audio").play();
    if (currentImage > 1) {
      currentImage--;
    } else {
      currentImage = total;
    }
    updateImage();
  }
  
  function siguiente() {
    document.getElementById("audio").play();
    if (currentImage < total) {
      currentImage++;
    } else {
      currentImage = 1;
    }
    updateImage();
  }
  
  function updateImage() {
    var image = document.getElementById('album');
    image.src = 'images/AjolotesVengadoresMayJun23_b-' + currentImage + '.png';
  }


