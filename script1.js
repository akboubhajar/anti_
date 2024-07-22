document.addEventListener('DOMContentLoaded', function() {
  const galleryContainer1 = document.querySelector('.gallery-container1');
  const galleryControlsContainer1 = document.querySelector('.gallery-controls1');
  const galleryControls1 = ['', '']; 
  const galleryItems1 = document.querySelectorAll('.gallery1-item');

  class Carousel1 {
    constructor(container, items, controls) {
      this.carouselContainer = container;
      this.carouselControls = controls;
      this.carouselArray = [...items];
    }

    updateGallery() {
      this.carouselArray.forEach(el => {
        el.classList.remove('gallery1-item-1', 'gallery1-item-2', 'gallery1-item-3', 'gallery1-item-4', 'gallery1-item-5');
      });

      this.carouselArray.slice(0, 5).forEach((el, i) => {
        el.classList.add(`gallery1-item-${i + 1}`);
      });
    }

    setCurrentState(direction) {
      if (direction.className.includes('gallery-controls1-previous')) {
        this.carouselArray.unshift(this.carouselArray.pop());
      } else {
        this.carouselArray.push(this.carouselArray.shift());
      }
      this.updateGallery();
    }

    setControls() {
      this.carouselControls.forEach(control => {
        const button = document.createElement('button');
        button.className = `gallery-controls1-${control}`;
        button.innerText = control;
        galleryControlsContainer1.appendChild(button);
      });
    }

    useControls() {
      const triggers = [...galleryControlsContainer1.childNodes];
      triggers.forEach(control => {
        control.addEventListener('click', e => {
          e.preventDefault();
          this.setCurrentState(control);
        });
      });
    }
  }

  const exampleCarousel1 = new Carousel1(galleryContainer1, galleryItems1, galleryControls1);
  exampleCarousel1.setControls();
  exampleCarousel1.useControls();
  exampleCarousel1.updateGallery();
});

function updatePrice(element) {
  var radio = element.querySelector('input[type="radio"]');
  var price = parseInt(radio.value);

  var priceDisplay = document.querySelector('.title-iiKxKp');
  priceDisplay.innerText = price + 'DH';
  var priceDiv = document.querySelector('.x300-dh-iiKxKp');
  var newPrice = price + 50;
  priceDiv.innerText = newPrice + 'DH';
}

function selectRadio(radioId) {
  document.getElementById(radioId).checked = true;
}

function changeColor(element) {
  var rectangles = document.querySelectorAll('.rectangle-24-iiKxKp, .rectangle-25-iiKxKp, .rectangle-34-iiKxKp');

  rectangles.forEach(function (rect) {
    rect.style.backgroundColor = 'var(--white)';
  });

  element.style.backgroundColor = '#36fb05';
}

