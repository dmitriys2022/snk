let porjectImages = document.querySelectorAll('.project__img');
let porjectImages2 = document.querySelectorAll('.project__img2');
let porjectImages3 = document.querySelectorAll('.project__img3');
let porjectImages4 = document.querySelectorAll('.project__img4');
let porjectIcon = document.querySelector('.projects__icon');
let mod = document.querySelectorAll('.modal');
let lastImage;
let windowWidth = window.innerWidth;




if (porjectIcon) {

   porjectImages.forEach(function (image, index) {
      image.onclick = function () {
         let getElementCss = window.getComputedStyle(image);
         let getFullImgUrl = getElementCss.getPropertyValue("background-image");
         let getImgUrlPos = getFullImgUrl.split("/img/project1/");
         let setNewImgUrl = getImgUrlPos[1].replace('")', '');


         getLatestOpenedImg = index + 1;

         let container = document.body;
         let newImgWindow = document.createElement("div");
         container.appendChild(newImgWindow);
         newImgWindow.setAttribute("class", "modal__active");
         newImgWindow.setAttribute("onclick", "closeImg1()");

         let newImg = document.createElement("img");
         newImgWindow.appendChild(newImg);
         newImg.setAttribute("src", "../img/project1/" + setNewImgUrl);
         newImg.setAttribute("id", "current-img");

         let newPrevBtn = document.createElement("a");
         let btnPrevText = document.createTextNode("❮");
         newPrevBtn.appendChild(btnPrevText);
         container.appendChild(newPrevBtn);
         newPrevBtn.setAttribute("class", "modal__sroll-left");
         newPrevBtn.setAttribute("onclick", "changeImg1(0)");

         let newNextBtn = document.createElement("a");
         let btnNextText = document.createTextNode("❯");
         newNextBtn.appendChild(btnNextText);
         container.appendChild(newNextBtn);
         newNextBtn.setAttribute("class", "modal__sroll-right");
         newNextBtn.setAttribute("onclick", "changeImg1(1)");

         let newCloseBtn = document.createElement("a");
         let btnCloseText = document.createTextNode("✖");
         newCloseBtn.appendChild(btnCloseText);
         container.appendChild(newCloseBtn);

         newCloseBtn.setAttribute("class", "modal__close");
         newCloseBtn.setAttribute("onclick", "closeImg1()");
         console.log(getImgUrlPos);
      }
   });
}

function closeImg1() {
   document.querySelector(".modal__active").remove();
   document.querySelector(".modal__close").remove();
   document.querySelector(".modal__sroll-right").remove();
   document.querySelector(".modal__sroll-left").remove();
}

function changeImg1(changeDir) {

   document.querySelector("#current-img").remove();

   let getImgWindow = document.querySelector(".modal__active");
   let newImg = document.createElement("img");
   getImgWindow.appendChild(newImg);

   let calcNewImg;

   if (changeDir === 1) {
      calcNewImg = getLatestOpenedImg + 1;

      if (calcNewImg > porjectImages.length - 1) {
         calcNewImg = 1;
      }
   }
   else if (changeDir === 0) {
      calcNewImg = getLatestOpenedImg - 1;
      if (calcNewImg < 1) {
         calcNewImg = porjectImages.length - 1;
      }
   }
   newImg.setAttribute("src", "/img/project1/" + calcNewImg + ".jpg");

   newImg.setAttribute("id", "current-img");


   getLatestOpenedImg = calcNewImg;
}

if (porjectImages2) {
   porjectImages2.forEach(function (image, index) {
      image.onclick = function () {
         let getElementCss = window.getComputedStyle(image);
         let getFullImgUrl = getElementCss.getPropertyValue("background-image");
         let getImgUrlPos = getFullImgUrl.split("/img/project2/");
         console.log(getImgUrlPos);
         let setNewImgUrl = getImgUrlPos[1].replace('")', '');

         getLatestOpenedImg = index + 1;

         let container = document.body;
         let newImgWindow = document.createElement("div");
         container.appendChild(newImgWindow);
         newImgWindow.setAttribute("class", "modal__active");
         newImgWindow.setAttribute("onclick", "closeImg2()");

         let newImg = document.createElement("img");
         newImgWindow.appendChild(newImg);
         newImg.setAttribute("src", "../img/project2/" + setNewImgUrl);
         newImg.setAttribute("id", "current-img");

         let newPrevBtn = document.createElement("a");
         let btnPrevText = document.createTextNode("❮");
         newPrevBtn.appendChild(btnPrevText);
         container.appendChild(newPrevBtn);
         newPrevBtn.setAttribute("class", "modal__sroll-left");
         newPrevBtn.setAttribute("onclick", "changeImg2(0)");

         let newNextBtn = document.createElement("a");
         let btnNextText = document.createTextNode("❯");
         newNextBtn.appendChild(btnNextText);
         container.appendChild(newNextBtn);
         newNextBtn.setAttribute("class", "modal__sroll-right");
         newNextBtn.setAttribute("onclick", "changeImg2(1)");

         let newCloseBtn = document.createElement("a");
         let btnCloseText = document.createTextNode("✖");
         newCloseBtn.appendChild(btnCloseText);
         container.appendChild(newCloseBtn);

         newCloseBtn.setAttribute("class", "modal__close");
         newCloseBtn.setAttribute("onclick", "closeImg2()");
         console.log(getImgUrlPos);
      }
   });
}

function closeImg2() {
   document.querySelector(".modal__active").remove();
   document.querySelector(".modal__close").remove();
   document.querySelector(".modal__sroll-right").remove();
   document.querySelector(".modal__sroll-left").remove();
}

function changeImg2(changeDir) {

   document.querySelector("#current-img").remove();

   let getImgWindow = document.querySelector(".modal__active");
   let newImg = document.createElement("img");
   getImgWindow.appendChild(newImg);

   let calcNewImg;

   if (changeDir === 1) {
      calcNewImg = getLatestOpenedImg + 1;

      if (calcNewImg > porjectImages2.length - 1) {
         calcNewImg = 1;
      }
   }
   else if (changeDir === 0) {
      calcNewImg = getLatestOpenedImg - 1;
      if (calcNewImg < 1) {
         calcNewImg = porjectImages2.length - 1;
      }
   }
   newImg.setAttribute("src", "/img/project2/" + calcNewImg + ".jpg");

   newImg.setAttribute("id", "current-img");


   getLatestOpenedImg = calcNewImg;
}













if (porjectImages3) {
   porjectImages3.forEach(function (image, index) {
      image.onclick = function () {
         let getElementCss = window.getComputedStyle(image);
         let getFullImgUrl = getElementCss.getPropertyValue("background-image");
         let getImgUrlPos = getFullImgUrl.split("/img/project3/");
         console.log(getImgUrlPos);
         let setNewImgUrl = getImgUrlPos[1].replace('")', '');

         getLatestOpenedImg = index + 1;

         let container = document.body;
         let newImgWindow = document.createElement("div");
         container.appendChild(newImgWindow);
         newImgWindow.setAttribute("class", "modal__active");
         newImgWindow.setAttribute("onclick", "closeImg3()");

         let newImg = document.createElement("img");
         newImgWindow.appendChild(newImg);
         newImg.setAttribute("src", "../img/project3/" + setNewImgUrl);
         newImg.setAttribute("id", "current-img");

         let newPrevBtn = document.createElement("a");
         let btnPrevText = document.createTextNode("❮");
         newPrevBtn.appendChild(btnPrevText);
         container.appendChild(newPrevBtn);
         newPrevBtn.setAttribute("class", "modal__sroll-left");
         newPrevBtn.setAttribute("onclick", "changeImg3(0)");

         let newNextBtn = document.createElement("a");
         let btnNextText = document.createTextNode("❯");
         newNextBtn.appendChild(btnNextText);
         container.appendChild(newNextBtn);
         newNextBtn.setAttribute("class", "modal__sroll-right");
         newNextBtn.setAttribute("onclick", "changeImg3(1)");

         let newCloseBtn = document.createElement("a");
         let btnCloseText = document.createTextNode("✖");
         newCloseBtn.appendChild(btnCloseText);
         container.appendChild(newCloseBtn);

         newCloseBtn.setAttribute("class", "modal__close");
         newCloseBtn.setAttribute("onclick", "closeImg3()");
         console.log(getImgUrlPos);
      }
   });
}

function closeImg3() {
   document.querySelector(".modal__active").remove();
   document.querySelector(".modal__close").remove();
   document.querySelector(".modal__sroll-right").remove();
   document.querySelector(".modal__sroll-left").remove();
}

function changeImg3(changeDir) {

   document.querySelector("#current-img").remove();

   let getImgWindow = document.querySelector(".modal__active");
   let newImg = document.createElement("img");
   getImgWindow.appendChild(newImg);

   let calcNewImg;

   if (changeDir === 1) {
      calcNewImg = getLatestOpenedImg + 1;

      if (calcNewImg > porjectImages2.length - 1) {
         calcNewImg = 1;
      }
   }
   else if (changeDir === 0) {
      calcNewImg = getLatestOpenedImg - 1;
      if (calcNewImg < 1) {
         calcNewImg = porjectImages2.length - 1;
      }
   }
   newImg.setAttribute("src", "/img/project3/" + calcNewImg + ".jpg");

   newImg.setAttribute("id", "current-img");


   getLatestOpenedImg = calcNewImg;
}




if (porjectImages4) {
   porjectImages4.forEach(function (image, index) {
      image.onclick = function () {
         let getElementCss = window.getComputedStyle(image);
         let getFullImgUrl = getElementCss.getPropertyValue("background-image");
         let getImgUrlPos = getFullImgUrl.split("/img/project4/");
         console.log(getImgUrlPos);
         let setNewImgUrl = getImgUrlPos[1].replace('")', '');

         getLatestOpenedImg = index + 1;

         let container = document.body;
         let newImgWindow = document.createElement("div");
         container.appendChild(newImgWindow);
         newImgWindow.setAttribute("class", "modal__active");
         newImgWindow.setAttribute("onclick", "closeImg4()");

         let newImg = document.createElement("img");
         newImgWindow.appendChild(newImg);
         newImg.setAttribute("src", "../img/project4/" + setNewImgUrl);
         newImg.setAttribute("id", "current-img");

         let newPrevBtn = document.createElement("a");
         let btnPrevText = document.createTextNode("❮");
         newPrevBtn.appendChild(btnPrevText);
         container.appendChild(newPrevBtn);
         newPrevBtn.setAttribute("class", "modal__sroll-left");
         newPrevBtn.setAttribute("onclick", "changeImg4(0)");

         let newNextBtn = document.createElement("a");
         let btnNextText = document.createTextNode("❯");
         newNextBtn.appendChild(btnNextText);
         container.appendChild(newNextBtn);
         newNextBtn.setAttribute("class", "modal__sroll-right");
         newNextBtn.setAttribute("onclick", "changeImg4(1)");

         let newCloseBtn = document.createElement("a");
         let btnCloseText = document.createTextNode("✖");
         newCloseBtn.appendChild(btnCloseText);
         container.appendChild(newCloseBtn);

         newCloseBtn.setAttribute("class", "modal__close");
         newCloseBtn.setAttribute("onclick", "closeImg4()");
         console.log(getImgUrlPos);
      }
   });
}

function closeImg4() {
   document.querySelector(".modal__active").remove();
   document.querySelector(".modal__close").remove();
   document.querySelector(".modal__sroll-right").remove();
   document.querySelector(".modal__sroll-left").remove();
}

function changeImg4(changeDir) {

   document.querySelector("#current-img").remove();

   let getImgWindow = document.querySelector(".modal__active");
   let newImg = document.createElement("img");
   getImgWindow.appendChild(newImg);

   let calcNewImg;

   if (changeDir === 1) {
      calcNewImg = getLatestOpenedImg + 1;

      if (calcNewImg > porjectImages2.length - 1) {
         calcNewImg = 1;
      }
   }
   else if (changeDir === 0) {
      calcNewImg = getLatestOpenedImg - 1;
      if (calcNewImg < 1) {
         calcNewImg = porjectImages2.length - 1;
      }
   }
   newImg.setAttribute("src", "/img/project4/" + calcNewImg + ".jpg");

   newImg.setAttribute("id", "current-img");


   getLatestOpenedImg = calcNewImg;
}

