function addTax(price) {
  if (!price || price <= 0 || typeof price === "string") {
    throw Error("Nothing is free! please supply a price");
  }
  const vat = 1.17; //maam
  const total = (price * vat).toFixed(2);
  return Number(total);
}

class GalleryPicture {
  constructor(name, price, picture, description, availability, quantity) {
    this.name = name;
    this.price = price;
    this.picture = picture;
    this.description = description;
    this.availability = availability;
    this.quantity = quantity;
  }
  getName() {
    return `${this.name}`;
  }
  getPrice() {
    return `The price is $${addTax(this.price)}`;
  }
  getPicture() {
    const IMG_PATH = `https://cdn.pixabay.com/photo/`;
    return `${IMG_PATH}${this.picture}`;
  }
  getDescription() {
    return `${this.description}`;
  }
  isAvailable(quantity) {
    if (quantity < 0 || typeof quantity === "string") {
      throw Error(" please supply a number");
    } else if (this.availability == false) {
      /* let small = document.querySelector(`small`);
      small.style.color = red; */
      return `Not Available`;
    } else {
      return `Theres only ${this.quantity} left`;
    }
  }
}
const image1 = new GalleryPicture(
  `Hills India Nature`,
  18,
  `2017/10/10/07/48/hills-2836301_960_720.jpg`,
  `Great India veiw from the hills`,
  true,
  9
);
const image2 = new GalleryPicture(
  `Bridge River Architecture`,
  35,
  `2019/05/26/18/27/bridge-4230946_960_720.jpg`,
  `Amazing shining Amsterdam view at night`,
  false,
  0
);
const image3 = new GalleryPicture(
  `florence cathedral night`,
  76,
  `2019/03/20/23/03/florence-cathedral-4069756_960_720.jpg`,
  `Cathedral of Santa Maria del Fiore`,
  true,
  4
);
const image4 = new GalleryPicture(
  `New york Manhattan`,
  43,
  `2019/07/21/07/12/new-york-4352072_960_720.jpg`,
  `New York's most famous borough and also its most visited`,
  true,
  13
);
const images = [image1, image2, image3, image4];
export { images };
