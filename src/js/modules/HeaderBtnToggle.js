class HeaderBtnToggle {
  constructor() {
    this.burgerButtons = document.querySelectorAll('.js-header-toggle');
    this.body = document.body;

    this.burgerButtons.forEach((button) => {
      const headerNav = button.closest('.header').querySelector('.header__dropdown');

      button.addEventListener('click', () => this.toggleMenu(button, headerNav));
    });
  }
  
  toggleMenu(button, headerNav) {
    button.classList.toggle('is-active');
    this.body.classList.toggle('is-menu-opened');
    headerNav.classList.toggle('is-show');
  }

  closeMenu(button, headerNav) {
    button.classList.remove('is-active');
    this.body.classList.remove('is-menu-opened');
    headerNav.classList.remove('is-show');
  }
}

export default HeaderBtnToggle;