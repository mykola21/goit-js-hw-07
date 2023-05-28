import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryList = document.querySelector('ul.gallery');

function createElemListImg (items) {
    return galleryItems
    .map(({ preview, original, description}) => {
        return `<li class="gallery__item">
        <a class="gallery__link" href= "${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>
      `;
    })
    .join('');
}
galleryList.insertAdjacentHTML('beforeend', createElemListImg(galleryItems));
galleryList.addEventListener('click', onGaleryClick);

  function onGaleryClick(evt) {
    evt.preventDefault();

    const target = evt.target;

   if(target.nodeName !== "IMG"){
    return;
  }
  const instance = basicLightbox.create(`<img src="${target.dataset.source}" width="800" height="600"/>`,
  {
          onShow: (instance) => {
            window.addEventListener('keydown', onEscKeyPress);
          },
          onClose: (instance) => {
            window.removeEventListener('keydown', onEscKeyPress);
          },
        })
        
  instance.show(); 
  
  function onEscKeyPress(e) {
    const ESC_KEY_CODE = 'Escape';
    const isEscKey = e.code === ESC_KEY_CODE;
    if (!isEscKey) return;
    instance.close();
  }

  }
 
  
