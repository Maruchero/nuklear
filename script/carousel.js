class NkCarousel {
  constructor(id) {
    this.carousel = document.getElementById(id);
    this.carouselContent = this.carousel.querySelector(".content");
    this.carouselStatus = this.carousel.querySelector(".status");
    this.carouselItems = Array.from(
      this.carouselContent.getElementsByClassName("carousel-item")
    );
    this.statusItems = [];
    for (let i = 0; i < this.carouselItems.length; i++) {
      let item = document.createElement("span");
      item.classList.add("status-item");
      this.carouselStatus.appendChild(item);
      this.statusItems.push(item);
    }
    this.focus = 0;

    this.updateCarousel();
  }

  updateCarousel() {
    let len = this.carouselItems.length;

    let next = (this.focus + 1) % len;
    let prev = (this.focus - 1 + len) % len;
    let nextItem = this.carouselItems[next];
    let prevItem = this.carouselItems[prev];
    let actualItem = this.carouselItems[this.focus];
    let actualStatus = this.statusItems[this.focus];

    for (let i = 0; i < this.carouselItems.length; i++) {
      this.carouselItems[i].classList.remove("next");
      this.carouselItems[i].classList.remove("prev");
      this.carouselItems[i].classList.remove("focus");
      this.statusItems[i].classList.remove("focus");
    }

    nextItem.classList.add("next");
    prevItem.classList.add("prev");
    actualItem.classList.add("focus");
    actualStatus.classList.add("focus");
  }

  next() {
    this.focus = (this.focus + 1) % this.carouselItems.length;
    this.updateCarousel();
  }

  prev() {
    this.focus =
      (this.focus - 1 + this.carouselItems.length) % this.carouselItems.length;
    this.updateCarousel();
  }
}

/*
const carouselContent = document.querySelector("#carousel .content");
const carouselStatus = document.querySelector("#carousel .status");
//const carouselCaption = document.querySelector("#carousel .caption");
let images = [
  "static/img/1.webp",
  "static/img/2.webp",
  "static/img/3.webp",
  "",
];
let captions = ["Vue", "React", "Angular", "Ciao"];
let carouselItems = Array.from(document.getElementsByClassName("carousel-img"));
let statusItems = [];
let focus = 0;

// Transform images in HTML elements

for (let i = 0; i < images.length; i++) {
  let item = document.createElement("span");
  item.classList.add("status-item");
  carouselStatus.appendChild(item);
  statusItems.push(item);
}

// Update focused index, update items classes
const updatecarousel = () => {
  let len = carouselItems.length;

  let next = (focus + 1) % len;
  let prev = (focus - 1 + len) % len;
  let nextItem = carouselItems[next];
  let prevItem = carouselItems[prev];
  let actualItem = carouselItems[focus];
  let actualStatus = statusItems[focus];

  for (let i = 0; i < carouselItems.length; i++) {
    carouselItems[i].classList.remove("next");
    carouselItems[i].classList.remove("prev");
    carouselItems[i].classList.remove("focus");
    statusItems[i].classList.remove("focus");
  }

  nextItem.classList.add("next");
  prevItem.classList.add("prev");
  actualItem.classList.add("focus");
  actualStatus.classList.add("focus");

  //carouselCaption.innerHTML = captions[focus] ?? "";
};

// next image
const next = () => {
  focus = (focus + 1) % carouselItems.length;
  updatecarousel();
};

// previous image
const prev = () => {
  focus = (focus - 1 + carouselItems.length) % carouselItems.length;
  updatecarousel();
};

// Initial update
updatecarousel();
*/