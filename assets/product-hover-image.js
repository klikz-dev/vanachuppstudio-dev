class ProductHoverImage extends HTMLElement{constructor(){super()}connectedCallback(){this.load()}load(){theme.utils.imagesLoaded(this,()=>{var e=this.closest('[data-hover-image="true"]');e&&e.setAttribute("data-hover-image","loaded")})}}customElements.define("product-hover-image",ProductHoverImage);