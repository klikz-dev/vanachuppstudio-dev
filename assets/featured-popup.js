class FeaturedPopup extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.triggerEle = document.querySelector('.featured-popup--trigger');

    this.closeEle = this.querySelector('.featured-popup--close');

    this.triggerEle.addEventListener('click', () => {
      const title = this.triggerEle.dataset['title'];
      const subtitle = this.triggerEle.dataset['subtitle'];
      const text = this.triggerEle.dataset['text'];

      this.titleEle = this.querySelector('.featured-popup--title');
      this.subtitleEle = this.querySelector('.featured-popup--subtitle');
      this.textEle = this.querySelector('.featured-popup--text');

      this.titleEle.textContent = title;
      this.subtitleEle.textContent = subtitle;
      this.textEle.innerHTML = text;

      this.classList.add('show');
    });

    this.closeEle.addEventListener('click', () => {
      this.classList.remove('show');
    });
  }
}

const featuredPopupEl = customElements.get('featured-popup');
featuredPopupEl || customElements.define('featured-popup', FeaturedPopup);
