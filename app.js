import { images } from "./images.js";

function getImagesTemplate(imageData) {
  let html = ``;
  imageData.forEach((image) => {
    html += `<div class="card bg-dark text-white" id="cardAnimation">
  <img src="${image.getPicture()}" class="card-img" alt="...">
     <div class="card-img-overlay" >
        <h5 class="card-title">${image.getName()}</h5>
         <h6 class="card-title">${image.getPrice()}</h6>
        <p class="card-text">${image.getDescription()}</p>
        <a href="#" class="btn btn-primary">Get Picture</a>
        <p class="card-text"><small class="text-muted">${image.isAvailable(
          image.quantity
        )}</small></p>
        </div>
      </div>
    </div>
  </div>
</div>`;
  });
  return html;
}

function displayImages(imageData) {
  const container = document.querySelector(`.card-group`);
  const imageHtml = getImagesTemplate(imageData);
  container.innerHTML = imageHtml;
}
displayImages(images);
