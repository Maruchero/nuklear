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
