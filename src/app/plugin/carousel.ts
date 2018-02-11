export class Carousel {

  private carousel: any;
  private carousel_content: any;
  private items: any;

  constructor(carousel) {
    this.carousel = carousel;
    this.init();
  }
  
  init() {
    this.carousel_content = this.carousel.querySelector('.carousel-content');
    this.carousel.querySelector('.carousel-nav-left').addEventListener('click', (e) => {
      this.prevSlide();
    }, false);
    this.carousel.querySelector('.carousel-nav-right').addEventListener('click', (e) => {
      this.nextSlide();
    }, false);

    this.setOrder(null);
  }

  setOrder(type){
    this.items = this.carousel_content.querySelectorAll('.carousel-item');
    let direction = 1;
    switch(type)
    {
      case 'previout':
        direction = 1;
        break;
      case 'next':
        direction = -1;
        break;
    }

    let item_count = this.items.length;
    if (item_count) 
    {
      for(let i = 0; i <= this.items.length - 1; i++)
      {
        let new_value;
        if (this.items[i].style.order) 
        {
          new_value = (parseInt(this.items[i].style.order, 10) + direction) % item_count;
        } 
        else 
        {
          new_value = ((i + 2) % item_count);
        }
        if (!new_value || new_value !== 2) 
        {
          this.items[i].style['z-index'] = '0';
          this.items[i].classList.remove('is-active');
        } 
        else 
        {
          this.items[i].style['z-index'] = '1';
          this.items[i].classList.add('is-active');
        }
        this.items[i].style.order = new_value ? new_value : item_count;
      }
    }
  }
  
  prevSlide() {
    this.carousel_content.classList.add('carousel-reverse');
    this.carousel_content.classList.toggle('carousel-animate');
    this.setOrder('previous');
    setTimeout(() => {
      this.carousel_content.classList.toggle('carousel-animate');
    }, 50);
  }
  
  nextSlide() {
    this.carousel_content.classList.remove('carousel-reverse');
    this.carousel_content.classList.toggle('carousel-animate');
    this.setOrder('next');
    setTimeout(() => {
      this.carousel_content.classList.toggle('carousel-animate');
    }, 50);
  };
}
  
  
  