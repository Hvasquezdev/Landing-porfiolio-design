const loadImage = (id, targetId) => {
  let element = document.getElementById(id);
  let targetElement = targetId ? document.getElementById(targetId) : element;
  let imageToLoad;
  if (element.dataset.image) {
    imageToLoad = element.dataset.image;
  } else if (typeof element.currentSrc === 'undefined') {
    imageToLoad = element.src;
  } else {
    imageToLoad = element.currentSrc;
  }
  if (imageToLoad) {
    let img = new Image();
    img.src = imageToLoad;
    img.onload = () => targetElement.classList.add('is-loaded');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadImage('wallpaper');
  loadImage('pictureImage', 'picture');
});
