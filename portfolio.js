const clickSound = document.getElementById('clickSound');

function playSound() {
  clickSound.currentTime = 0;
  clickSound.play();
}

// Gallery images by category
const galleryImages = [
  { src: "images/acrylic1.jpeg", caption: "Acrylic Design 1", category: "acrylic" },
  { src: "images/acrylic2.jpeg", caption: "Acrylic Design 2", category: "acrylic" },
  { src: "images/acrylic3.jpeg", caption: "Acrylic Design 3", category: "acrylic" },
  { src: "images/acrylic4.jpeg", caption: "Acrylic Design 4", category: "acrylic" },
  { src: "images/acrylic5.jpeg", caption: "Acrylic Design 5", category: "acrylic" },
  { src: "images/acrylic6.jpeg", caption: "Acrylic Design 6", category: "acrylic" },
  { src: "images/acrylic7.jpeg", caption: "Acrylic Design 7", category: "acrylic" },
  { src: "images/acrylic8.jpeg", caption: "Acrylic Design 8", category: "acrylic" },
  { src: "images/acrylic9.jpeg", caption: "Acrylic Design 9", category: "acrylic" },
  { src: "images/acrylic10.jpeg", caption: "Acrylic Design 10", category: "acrylic" },
  { src: "images/acrylic11.jpeg", caption: "Acrylic Design 11", category: "acrylic" },
  { src: "images/acrylic12.jpeg", caption: "Acrylic Design 12", category: "acrylic" },
  { src: "images/acrylic13.jpeg", caption: "Acrylic Design 13", category: "acrylic" },
  { src: "images/acrylic14.jpeg", caption: "Acrylic Design 14", category: "acrylic" },
  { src: "images/acrylic15.jpeg", caption: "Acrylic Design 15", category: "acrylic" },
  { src: "images/acrylic16.jpeg", caption: "Acrylic Design 16", category: "acrylic" },
  { src: "images/acrylic17.jpeg", caption: "Acrylic Design 17", category: "acrylic" },
  { src: "images/acrylic18.jpeg", caption: "Acrylic Design 18", category: "acrylic" },
  { src: "images/acrylic19.jpeg", caption: "Acrylic Design 19", category: "acrylic" },
  { src: "images/acrylic20.jpeg", caption: "Acrylic Design 20", category: "acrylic" },
  { src: "images/acrylic21.jpeg", caption: "Acrylic Design 21", category: "acrylic" },
  { src: "images/acrylic22.jpeg", caption: "Acrylic Design 22", category: "acrylic" },
  { src: "images/acrylic23.jpeg", caption: "Acrylic Design 23", category: "acrylic" },
  { src: "images/acrylic24.jpeg", caption: "Acrylic Design 24", category: "acrylic" },
  { src: "images/acrylic25.jpeg", caption: "Acrylic Design 25", category: "acrylic" },
  { src: "images/acrylic26.jpeg", caption: "Acrylic Design 26", category: "acrylic" },
  { src: "images/acrylic27.jpeg", caption: "Acrylic Design 27", category: "acrylic" },
  { src: "images/acrylic28.jpeg", caption: "Acrylic Design 28", category: "acrylic" },
  { src: "images/acrylic29.jpeg", caption: "Acrylic Design 29", category: "acrylic" },
  { src: "images/acrylic30.jpeg", caption: "Acrylic Design 30", category: "acrylic" },
  { src: "images/acrylic31.jpeg", caption: "Acrylic Design 31", category: "acrylic" },
  { src: "images/acrylic32.jpeg", caption: "Acrylic Design 32", category: "acrylic" },
  // Add up to 20 acrylic images
  { src: "images/gel1.jpeg", caption: "Gel Design 1", category: "gel" },
  { src: "images/gel2.jpeg", caption: "Gel Design 2", category: "gel" },
  { src: "images/gel3.jpeg", caption: "Gel Design 3", category: "gel" },
  // Add more gel images
  { src: "images/lashes1.jpeg", caption: "Lash Design 1", category: "lashes" },
  { src: "images/lashes2.jpeg", caption: "Lash Design 2", category: "lashes" },
  // Add more lashes images
  { src: "images/mani1.jpeg", caption: "Manicure 1", category: "mani" },
  // Add more manicure images
];

const gallery = document.getElementById('gallery');
let currentIndex = 0;
let filteredImages = galleryImages;

// Render gallery
function renderGallery(imagesArray) {
  gallery.innerHTML = '';
  imagesArray.forEach((imgObj, index) => {
    const fig = document.createElement('figure');
    fig.classList.add('thumb');
    fig.innerHTML = `
      <img src="${imgObj.src}" alt="${imgObj.caption}" onclick="openLightbox(${index})">
      <figcaption>${imgObj.caption}</figcaption>
    `;
    gallery.appendChild(fig);
  });
}

// Filter by category
function filterCategory(cat) {
  document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  filteredImages = cat === 'all' ? galleryImages : galleryImages.filter(img => img.category === cat);
  renderGallery(filteredImages);
}

// LIGHTBOX
function openLightbox(index) {
  playSound();
  currentIndex = index;
  document.getElementById('lightbox').style.display = 'flex';
  showLightboxImage();
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

function changeImage(direction) {
  playSound();
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = filteredImages.length - 1;
  if (currentIndex >= filteredImages.length) currentIndex = 0;
  showLightboxImage();
}

function showLightboxImage() {
  const img = document.getElementById('lightbox-img');
  const caption = document.getElementById('lightbox-caption');
  img.src = filteredImages[currentIndex].src;
  caption.textContent = filteredImages[currentIndex].caption;
}

// Swipe support
let startX = 0;
const lightbox = document.getElementById("lightbox");

lightbox.addEventListener("touchstart", (e) => startX = e.touches[0].clientX);
lightbox.addEventListener("touchend", (e) => {
  const endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) changeImage(1);
  if (endX - startX > 50) changeImage(-1);
});

// Initialize gallery
renderGallery(galleryImages);
