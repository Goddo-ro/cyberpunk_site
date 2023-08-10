import isElementInViewport from "./utils/isElementInViewport.mjs";

export default function heroImageChanger() {
  let index = 0;
  const images = ["1.jpg", "2.jpg", "3.jpg"]
  const hero = document.getElementById("hero");
  const intervalSeconds = 10000;

  // Interval that calls function that changes background image
  let interval = setInterval(() => {
    setUpImage();
  }, intervalSeconds);

  // Function that changes background image
  function setUpImage() {
    index = (index + 1) % images.length;
    hero.style.backgroundImage = `url(../../../assets/images/hero_carousel/${images[index]})`;
  }

  // Delete interval if section not in viewport
  // document.addEventListener("scroll", () => {
  //   if (!isElementInViewport(hero)) {
  //     console.log("Not in view port");
  //   }
  // });
}