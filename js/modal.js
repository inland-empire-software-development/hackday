function Modal(overlay, anchorElement) {
  var modalContent = document.querySelector(".modal-content");
    this.overlay = overlay;
    this.anchorElement = anchorElement;
    this.open = function(content) {
      modalContent.innerHTML = content;
      this.overlay.classList.remove('is-hidden');
      this.overlay.style.top = this.anchorElement.offsetTop + 'px';
      this.overlay.style.left = this.anchorElement.offsetLeft + 'px';
      this.overlay.style.width = this.anchorElement.width + 'px';
      this.overlay.style.height = this.anchorElement.height + 'px';
    }
  
    this.close = function() {
      this.overlay.classList.add('is-hidden');
      modalContent.innerHTML = "";
    }
}
