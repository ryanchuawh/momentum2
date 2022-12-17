var backImg = ["assets/img/place1.jpg", "assets/img/place2.jpg", "assets/img/place3.jpg", "assets/img/place4.jpg", "assets/img/place5.jpg"];
var today = new Date();
var day = Math.floor(today/8.64e7);
document.getElementById('main').style.backgroundImage = 'url('+backImg[day%5]+')';
