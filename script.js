const sliderContainer = document.querySelector(".sliderContainer");
const hCmap = document.getElementById("hCmap");
const scene1 = document.getElementById("scene1");
const dialogue = document.querySelector(".dialogue");
sectionList = dialogue.getElementsByTagName("section");
let i = 0;
const btnChoice = document.querySelectorAll(".slider-button");
const choice = document.getElementById("choice");
const menuBtn = document.getElementById("menuBtn");
const bracelet = document.getElementById("bracelet");
const menuX = document.getElementById("menuX");
const map = document.querySelectorAll(".image-mapper-shape");
const mapDiv = document.getElementById("mapDiv");

// map.forEach(element => {
// element.onclick=
function mapId(mapName) {
  console.log("Maps: " + mapName);

  if (mapName == "Ophilia") {
    document.getElementById("HC1").style.display = "grid";
    scene1.style.display = "block";
    hCmap.style.display = "none";
  }
}

function toggleDiv(Object) {
  mapDiv.style.display = "block";
  if (Object == "flower1") {
    mapDiv.innerText = "Flowers";
  }
  if (Object == "flower2") {
    mapDiv.innerText = "Flowers";
  }
  if (Object == "center") {
    mapDiv.innerText = "Center";
  }
  if (Object == "camera") {
    mapDiv.innerText = "Camera";
  }
}

function toggleMenu(menuName) {
  console.log("Maps: " + menuName);
  menuDiv = document.getElementById(menuName);

  menuDiv.style.display = "flex";
  // scene1.style.display = "block";
  // hCmap.style.display = "none";

  // console.log(+this.getAttribute('title'));
}

function changeLocation(Location) {
  console.log("changeLocation");
  const destination = document.getElementById(Location);
  destination.style.display = "block";

  let sceneNr = Location.slice(2);
  console.log(sceneNr);
    document.getElementsByClassName("nextSliderCont")[sceneNr-2].remove();

  sceneImg = document.getElementById("scene" + sceneNr);
  document.getElementById("scene1").remove();
  document.getElementById("hCmap").remove();

  sceneImg.style.display = "block";
}

console.log(sectionList);
pathList = "null";

sectionList[0].style.display = "block";
console.log("Liste: " + sectionList.length);

const arrow = document.querySelector(".arrow");

arrow.onclick = function () {
  if (arrow.classList.contains("arrowPath")) {
    next(pathList);
  } else {
    next(sectionList);
  }
};

function next(List) {
  console.log("next");

  i++;
  List[i - 1].style.display = "none";
  List[i].style.display = "block";
  console.log("i: " + i);
  if (i == List.length - 1) {
    // List[i + 1].style.display = "block";
    arrow.style.display = "none";
    choice.style.display = "grid";
  }
}

btnChoice.forEach((button) => {
  button.onclick = function chooseAnswer() {
    if (pathList == "null") {
      arrow.classList.add("arrowPath");
    } else {
      pathList[i].style.display = "none";
    }
    const answer = this.id;
    this.remove();
    let pathId = document.getElementById(answer.slice(0, 3));
    dialogue.style.display = "none";
    choice.style.display = "none";
    sectionList[i].style.display = "none";
    arrow.style.display = "unset";
    pathList = pathId.getElementsByTagName("section");
    console.log(pathList);
    pathId.style.display = "block";

    i = 0;
    pathList[0].style.display = "unset";

    if (answer == "home") {
      menuBtn.style.display = "block";
      arrow.style.display = "none";
    }
  };
});

// document.addEventListener("keydown", function (event) {
//   if (event.key === "i" || event.key === "I") {
//     const inventar = document.getElementById("inventar");
//     const istSichtbar = inventar.style.display === "block";
//     inventar.style.display = istSichtbar ? "none" : "block";
//   }
// });

// inventory.onclick= function(){

// }
menuBtn.onclick = function () {
  console.log("Klick");
  menuBtn.style.display = "none";
  bracelet.style.display = "block";
  menuX.style.display = "block";
  document.getElementById("HC1").style.display = "none";
};

menuX.onclick = function () {
  menuBtn.style.display = "block";
  bracelet.style.display = "none";
  menuX.style.display = "none";
  document.getElementById("HC1").style.display = "grid";

  menuDiv.style.display = "none";
};

// function chooseNextSlider(sliderIndex) {
//   // Hide other sliders
//   for (let i = 1; i <= sliders.length; i++) {
//     if (i !== sliderIndex) {
//       var slider = document.getElementById(sliders[i - 1].containerId);
//       slider.style.display = "none";
//     }
//   }
//   // Show the first image of the selected slider initially
//   showImage(sliderIndex, 0);
// }

// // Show the first image of the first slider initially
// showImage(1, 0);
