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
