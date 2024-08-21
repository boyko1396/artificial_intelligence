class ScrollCards {
  constructor(selector) {
    this.cards = document.querySelectorAll(selector);
    this.windowHeight = window.innerHeight;

    this.handleScroll = this.handleScroll.bind(this);

    this.init();
  }

  handleScroll() {
    const scrollY = window.scrollY;
    let closestCard = null;
    let closestDistance = Infinity;

    this.cards.forEach(card => {
      const cardRect = card.getBoundingClientRect();
      const cardCenter = (cardRect.top + cardRect.bottom) / 2;
      const windowCenter = this.windowHeight / 2;

      const distance = Math.abs(cardCenter - windowCenter);

      if (cardRect.top < this.windowHeight * 0.6 && cardRect.bottom > this.windowHeight * 0.4) {
        if (distance < closestDistance) {
          closestDistance = distance;
          closestCard = card;
        }
      }
    });

    this.cards.forEach(card => card.classList.remove('is-active'));

    if (closestCard) {
      closestCard.classList.add('is-active');
    }
  }

  init() {
    window.addEventListener('scroll', () => {
      requestAnimationFrame(this.handleScroll);
    });

    this.handleScroll();
  }
}

export default ScrollCards;