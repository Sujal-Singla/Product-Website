let tl = gsap.timeline();

document.querySelector("nav").addEventListener("mouseenter", function () {
  document.querySelector("nav").style.height = "7rem";
  tl.from("nav a", {
    x: "4px",
    y: "14px",
    stagger: 0.1,
    opacity: 0,
    duration: 0.2,
    rotate: "10deg",
  });
});
document.querySelector("nav").addEventListener("mouseleave", function () {
  tl.from("nav a", {
    x: "4px",
    y: "14px",
    stagger: 0.1,
    opacity: 0,
    duration: 0.2,
    rotate: "10deg",
  });
  document.querySelector("nav").style.height = "4rem";
});

function canvas() {
  const canvas = document.querySelector("#anime1 canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `
./images/ezgif-frame-001.jpg
./images/ezgif-frame-002.jpg
./images/ezgif-frame-003.jpg
./images/ezgif-frame-004.jpg
./images/ezgif-frame-005.jpg
./images/ezgif-frame-006.jpg
./images/ezgif-frame-007.jpg
./images/ezgif-frame-008.jpg
./images/ezgif-frame-009.jpg
./images/ezgif-frame-010.jpg
./images/ezgif-frame-011.jpg
./images/ezgif-frame-012.jpg
./images/ezgif-frame-013.jpg
./images/ezgif-frame-014.jpg
./images/ezgif-frame-015.jpg
./images/ezgif-frame-016.jpg
./images/ezgif-frame-017.jpg
./images/ezgif-frame-018.jpg
./images/ezgif-frame-019.jpg
./images/ezgif-frame-020.jpg
./images/ezgif-frame-021.jpg
./images/ezgif-frame-022.jpg
./images/ezgif-frame-023.jpg
./images/ezgif-frame-024.jpg
./images/ezgif-frame-025.jpg
./images/ezgif-frame-026.jpg
./images/ezgif-frame-027.jpg
./images/ezgif-frame-028.jpg
./images/ezgif-frame-029.jpg
./images/ezgif-frame-030.jpg
./images/ezgif-frame-031.jpg
./images/ezgif-frame-032.jpg
./images/ezgif-frame-033.jpg
./images/ezgif-frame-034.jpg
./images/ezgif-frame-035.jpg
./images/ezgif-frame-036.jpg
./images/ezgif-frame-037.jpg
./images/ezgif-frame-038.jpg
./images/ezgif-frame-039.jpg
./images/ezgif-frame-040.jpg
./images/ezgif-frame-041.jpg
./images/ezgif-frame-042.jpg
./images/ezgif-frame-043.jpg
./images/ezgif-frame-044.jpg
./images/ezgif-frame-045.jpg
./images/ezgif-frame-046.jpg
./images/ezgif-frame-047.jpg
./images/ezgif-frame-048.jpg
./images/ezgif-frame-049.jpg
./images/ezgif-frame-050.jpg
./images/ezgif-frame-051.jpg
./images/ezgif-frame-052.jpg
./images/ezgif-frame-053.jpg
./images/ezgif-frame-054.jpg
./images/ezgif-frame-055.jpg
./images/ezgif-frame-056.jpg
./images/ezgif-frame-057.jpg
./images/ezgif-frame-058.jpg
./images/ezgif-frame-059.jpg
./images/ezgif-frame-060.jpg
./images/ezgif-frame-061.jpg
./images/ezgif-frame-062.jpg
./images/ezgif-frame-063.jpg
./images/ezgif-frame-064.jpg
./images/ezgif-frame-065.jpg
./images/ezgif-frame-066.jpg
./images/ezgif-frame-067.jpg
./images/ezgif-frame-068.jpg
./images/ezgif-frame-069.jpg
./images/ezgif-frame-070.jpg
./images/ezgif-frame-071.jpg
./images/ezgif-frame-072.jpg
./images/ezgif-frame-073.jpg
./images/ezgif-frame-074.jpg
./images/ezgif-frame-075.jpg
./images/ezgif-frame-076.jpg
./images/ezgif-frame-077.jpg
./images/ezgif-frame-078.jpg
./images/ezgif-frame-079.jpg
./images/ezgif-frame-080.jpg
./images/ezgif-frame-081.jpg
./images/ezgif-frame-082.jpg
./images/ezgif-frame-083.jpg
./images/ezgif-frame-084.jpg
./images/ezgif-frame-085.jpg
./images/ezgif-frame-086.jpg
./images/ezgif-frame-087.jpg
        `;
    return data.split("\n")[index];
  }

  const frameCount = 87;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#anime1`,
      //   set start end according to preference
      start: `top top`,
      end: `600% top`,
      scroller: `body`,
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: "#anime1",
    pin: true,
    scroller: `body`,
    start: `top top`,
    end: `600% top`,
  });
}
// gsap.registerPlugin(ScrollTrigger);

gsap.from(".feature", {
  delay: 1,
  duration: 1,
  x: -200,
  opacity: 0,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "body",
    scroller: "body",
    start: "top 70%",
    end: "top 30%",
    markers: true,
    scrub: 0.2,
  },
});

function canvas2() {
  const canvas = document.querySelector("#anime2 canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `
./images/ezgif-split/ezgif-frame-001.jpg
./images/ezgif-split/ezgif-frame-002.jpg
./images/ezgif-split/ezgif-frame-003.jpg
./images/ezgif-split/ezgif-frame-004.jpg
./images/ezgif-split/ezgif-frame-005.jpg
./images/ezgif-split/ezgif-frame-006.jpg
./images/ezgif-split/ezgif-frame-007.jpg
./images/ezgif-split/ezgif-frame-008.jpg
./images/ezgif-split/ezgif-frame-009.jpg
./images/ezgif-split/ezgif-frame-010.jpg
./images/ezgif-split/ezgif-frame-011.jpg
./images/ezgif-split/ezgif-frame-012.jpg
./images/ezgif-split/ezgif-frame-013.jpg
./images/ezgif-split/ezgif-frame-014.jpg
./images/ezgif-split/ezgif-frame-015.jpg
./images/ezgif-split/ezgif-frame-016.jpg
./images/ezgif-split/ezgif-frame-017.jpg
./images/ezgif-split/ezgif-frame-018.jpg
./images/ezgif-split/ezgif-frame-019.jpg
./images/ezgif-split/ezgif-frame-020.jpg
./images/ezgif-split/ezgif-frame-021.jpg
./images/ezgif-split/ezgif-frame-022.jpg
./images/ezgif-split/ezgif-frame-023.jpg
./images/ezgif-split/ezgif-frame-024.jpg
./images/ezgif-split/ezgif-frame-025.jpg
./images/ezgif-split/ezgif-frame-026.jpg
./images/ezgif-split/ezgif-frame-027.jpg
./images/ezgif-split/ezgif-frame-028.jpg
./images/ezgif-split/ezgif-frame-029.jpg
./images/ezgif-split/ezgif-frame-030.jpg
./images/ezgif-split/ezgif-frame-031.jpg
./images/ezgif-split/ezgif-frame-032.jpg
./images/ezgif-split/ezgif-frame-033.jpg
./images/ezgif-split/ezgif-frame-034.jpg
./images/ezgif-split/ezgif-frame-035.jpg
./images/ezgif-split/ezgif-frame-036.jpg
./images/ezgif-split/ezgif-frame-037.jpg
./images/ezgif-split/ezgif-frame-038.jpg
./images/ezgif-split/ezgif-frame-039.jpg
./images/ezgif-split/ezgif-frame-040.jpg
./images/ezgif-split/ezgif-frame-041.jpg
./images/ezgif-split/ezgif-frame-042.jpg
./images/ezgif-split/ezgif-frame-043.jpg
./images/ezgif-split/ezgif-frame-044.jpg
./images/ezgif-split/ezgif-frame-045.jpg
./images/ezgif-split/ezgif-frame-046.jpg
./images/ezgif-split/ezgif-frame-047.jpg
./images/ezgif-split/ezgif-frame-048.jpg
./images/ezgif-split/ezgif-frame-049.jpg
./images/ezgif-split/ezgif-frame-050.jpg
./images/ezgif-split/ezgif-frame-051.jpg
./images/ezgif-split/ezgif-frame-052.jpg
./images/ezgif-split/ezgif-frame-053.jpg
./images/ezgif-split/ezgif-frame-054.jpg
./images/ezgif-split/ezgif-frame-055.jpg
./images/ezgif-split/ezgif-frame-056.jpg
./images/ezgif-split/ezgif-frame-057.jpg
./images/ezgif-split/ezgif-frame-058.jpg
./images/ezgif-split/ezgif-frame-059.jpg
./images/ezgif-split/ezgif-frame-060.jpg
./images/ezgif-split/ezgif-frame-061.jpg
./images/ezgif-split/ezgif-frame-062.jpg
./images/ezgif-split/ezgif-frame-063.jpg
./images/ezgif-split/ezgif-frame-064.jpg
./images/ezgif-split/ezgif-frame-065.jpg
./images/ezgif-split/ezgif-frame-066.jpg
./images/ezgif-split/ezgif-frame-067.jpg
./images/ezgif-split/ezgif-frame-068.jpg
./images/ezgif-split/ezgif-frame-069.jpg
./images/ezgif-split/ezgif-frame-070.jpg
./images/ezgif-split/ezgif-frame-071.jpg
./images/ezgif-split/ezgif-frame-072.jpg
./images/ezgif-split/ezgif-frame-073.jpg
./images/ezgif-split/ezgif-frame-074.jpg
./images/ezgif-split/ezgif-frame-075.jpg
./images/ezgif-split/ezgif-frame-076.jpg
./images/ezgif-split/ezgif-frame-077.jpg
./images/ezgif-split/ezgif-frame-078.jpg
./images/ezgif-split/ezgif-frame-079.jpg
./images/ezgif-split/ezgif-frame-080.jpg
./images/ezgif-split/ezgif-frame-081.jpg
./images/ezgif-split/ezgif-frame-082.jpg
./images/ezgif-split/ezgif-frame-083.jpg
./images/ezgif-split/ezgif-frame-084.jpg
./images/ezgif-split/ezgif-frame-085.jpg
./images/ezgif-split/ezgif-frame-086.jpg
./images/ezgif-split/ezgif-frame-087.jpg
./images/ezgif-split/ezgif-frame-088.jpg
./images/ezgif-split/ezgif-frame-089.jpg
./images/ezgif-split/ezgif-frame-090.jpg
./images/ezgif-split/ezgif-frame-091.jpg
./images/ezgif-split/ezgif-frame-092.jpg
        `;
    return data.split("\n")[index];
  }

  const frameCount = 87;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#anime2`,
      //   set start end according to preference
      start: `top top`,
      end: `600% top`,
      scroller: `body`,
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: "#anime2",
    pin: true,
    scroller: `body`,
    start: `top top`,
    end: `600% top`,
  });
}
canvas();
canvas2();

document.addEventListener("DOMContentLoaded", function () {
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  const cartCountSpan = document.getElementById("cart-count");

  // Function to update cart count in localStorage
  function updateCartCount(count) {
    localStorage.setItem("cartCount", count);
    cartCountSpan.textContent = count;
  }

  // Function to retrieve cart count from localStorage
  function getCartCount() {
    return localStorage.getItem("cartCount")
      ? parseInt(localStorage.getItem("cartCount"))
      : 0;
  }

  // Initialize cart count on page load
  let cartCount = getCartCount();
  updateCartCount(cartCount);

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      const card = event.target.closest(".card");
      const productId = card.dataset.productId;

      // Increment cart count
      cartCount++;
      updateCartCount(cartCount);
      addToCart(productId);
      console.log("Added to cart:", productId); // For debugging
    });
  });
});

function addToCart(productId) {
  let cart = JSON.parse(localStorage.getItem("cart") || "[]"); // Get cart or create empty array
  cart.push(productId); // Add product ID to cart
  localStorage.setItem("cart", JSON.stringify(cart)); // Save updated cart
}
