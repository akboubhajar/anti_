/** GOOD TO 
document.addEventListener('DOMContentLoaded', function() {
  const galleryContainer = document.querySelector('.gallery-container');
  const galleryControlsContainer = document.querySelector('.gallery-controls');
  const galleryControls = ['', ''];
  const galleryItems = document.querySelectorAll('.gallery-item');

  class Carousel {
      constructor(container, items, controls) {
          this.carouselContainer = container;
          this.carouselControls = controls;
          this.carouselArray = [...items];
      }

      updateGallery() {
          this.carouselArray.forEach(el => {
              el.classList.remove('gallery-item-1', 'gallery-item-2', 'gallery-item-3', 'gallery-item-4', 'gallery-item-5');
          });

          this.carouselArray.slice(0, 5).forEach((el, i) => {
              el.classList.add(`gallery-item-${i + 1}`);
          });
      }

      setCurrentState(direction) {
          if (direction.className.includes('gallery-controls-previous')) {
              this.carouselArray.unshift(this.carouselArray.pop());
          } else {
              this.carouselArray.push(this.carouselArray.shift());
          }
          this.updateGallery();
      }

      setControls() {
          this.carouselControls.forEach(control => {
              const button = document.createElement('button');
              button.className = `gallery-controls-${control}`;
              button.innerText = control;
              galleryControlsContainer.appendChild(button);
          });
      }

      useControls() {
          const triggers = [...galleryControlsContainer.childNodes];
          triggers.forEach(control => {
              control.addEventListener('click', e => {
                  e.preventDefault();
                  this.setCurrentState(control);
              });
          });
      }
  }

  const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);
  exampleCarousel.setControls();
  exampleCarousel.useControls();
  exampleCarousel.updateGallery();
});
 */
/** INGRED */ 
document.addEventListener('DOMContentLoaded', function() {
  const galleryContainer1 = document.querySelector('.gallery-container1');
  const galleryControlsContainer1 = document.querySelector('.gallery-controls1');
  const galleryControls1 = ['', '']; // Adjust controls if needed
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



document.addEventListener('DOMContentLoaded', function() {
  const galleryContainer = document.querySelector('.gallery-container');
  const galleryControlsContainer = document.querySelector('.gallery-controls');
  const galleryControls = ['prev', 'next'];
  const galleryItems = document.querySelectorAll('.gallery-item');

  class Carousel {
      constructor(container, items, controls) {
          this.carouselContainer = container;
          this.carouselControls = controls;
          this.carouselArray = [...items];
      }

      updateGallery() {
          this.carouselArray.forEach(el => {
              el.classList.remove('gallery-item-1', 'gallery-item-2', 'gallery-item-3', 'gallery-item-4', 'gallery-item-5');
          });

          this.carouselArray.slice(0, 5).forEach((el, i) => {
              el.classList.add(`gallery-item-${i + 1}`);
          });
      }

      setCurrentState(direction) {
          if (direction.className.includes('gallery-controls-prev')) {
              this.carouselArray.unshift(this.carouselArray.pop());
          } else {
              this.carouselArray.push(this.carouselArray.shift());
          }
          this.updateGallery();
      }

      setControls() {
          this.carouselControls.forEach(control => {
              const button = document.createElement('button');
              button.className = `gallery-controls-${control}`;
              button.innerText = control;
              galleryControlsContainer.appendChild(button);
          });
      }

      useControls() {
          const triggers = [...galleryControlsContainer.childNodes];
          triggers.forEach(control => {
              control.addEventListener('click', e => {
                  e.preventDefault();
                  this.setCurrentState(control);
              });
          });
      }
  }

  const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);
  exampleCarousel.setControls();
  exampleCarousel.useControls();
  exampleCarousel.updateGallery();
});

