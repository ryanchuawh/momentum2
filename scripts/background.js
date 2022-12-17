let backImg = ["assets/img/place1.jpg", "assets/img/place2.jpg", "assets/img/place3.jpg", "assets/img/place4.jpg", "assets/img/place5.jpg"];
let today = new Date();
let day = Math.floor(today/8.64e7);
document.getElementById('main').style.backgroundImage = 'url('+backImg[day%5]+')';

let quotes = ["I guess it simply goes to show that stuff will come and stuff will go. But do we cry? Goodness, NO! We keep on singing. <br> -Pete the Cat", ]