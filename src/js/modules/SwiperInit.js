import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

Swiper.use([Pagination]);

class ResponsiveSliders {
  constructor() {
    this.infoSliderInstance = null;

    this.handleResponsiveSliders();
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  createSwiperInstance(sliderSelector, params) {
    const sliderElement = document.querySelector(sliderSelector);

    if (!sliderElement) return null;

    return new Swiper(sliderElement, {
      loop: params.loop || false,
      slidesPerView: params.slidesPerView || 1,
      spaceBetween: params.spaceBetween || 0,
      autoHeight: true,
      pagination: {
        el: params.paginationEl,
        clickable: true,
      },
      ...params.settings,
    });
  }

  handleResponsiveSliders() {
    const isMobile = window.innerWidth < 767;

    if (isMobile) {
      if (!this.infoSliderInstance) {
        this.infoSliderInstance = this.createSwiperInstance('.js-info-slider-init', {
          loop: false,
          paginationEl: '.js-swiper-pagination-info',
          settings: {
            slidesPerView: 'auto',
            spaceBetween: 20,
          },
        });
      }
    } else {
      if (this.infoSliderInstance) {
        this.infoSliderInstance.destroy(true, true);
        this.infoSliderInstance = null;
      }
    }
  }

  handleResize() {
    this.handleResponsiveSliders();
  }
}

export default ResponsiveSliders;