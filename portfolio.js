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
  { src: "images/gel4.jpeg", caption: "Gel Design 4", category: "gel" },
  { src: "images/gel5.jpeg", caption: "Gel Design 5", category: "gel" },
  { src: "images/gel6.jpeg", caption: "Gel Design 6", category: "gel" },
  { src: "images/gel7.jpeg", caption: "Gel Design 7", category: "gel" },
  { src: "images/gel8.jpeg", caption: "Gel Design 8", category: "gel" },
  { src: "images/gel9.jpeg", caption: "Gel Design 9", category: "gel" },
  { src: "images/gel10.jpeg", caption: "Gel Design 10", category: "gel" },
  { src: "images/gel11.jpeg", caption: "Gel Design 11", category: "gel" },
  { src: "images/gel12.jpeg", caption: "Gel Design 12", category: "gel" },
  { src: "images/gel13.jpeg", caption: "Gel Design 13", category: "gel" },
  { src: "images/gel14.jpeg", caption: "Gel Design 14", category: "gel" },
  { src: "images/gel15.jpeg", caption: "Gel Design 15", category: "gel" },
  { src: "images/gel16.jpeg", caption: "Gel Design 16", category: "gel" },
  { src: "images/gel17.jpeg", caption: "Gel Design 17", category: "gel" },
  { src: "images/gel18.jpeg", caption: "Gel Design 18", category: "gel" },
  { src: "images/gel19.jpeg", caption: "Gel Design 19", category: "gel" },
  { src: "images/gel20.jpeg", caption: "Gel Design 20", category: "gel" },
  { src: "images/gel21.jpeg", caption: "Gel Design 21", category: "gel" },
  { src: "images/gel22.jpeg", caption: "Gel Design 22", category: "gel" },
  { src: "images/gel23.jpeg", caption: "Gel Design 23", category: "gel" },
  
  // Add more gel images
  { src: "images/lashes1.jpeg", caption: "Lash Design 1", category: "lashes" },
  { src: "images/lashes2.jpeg", caption: "Lash Design 2", category: "lashes" },
  // Add more lashes images
  { src: "images/mani1.jpeg", caption: "Manicure 1", category: "mani" },
  { src: "images/mani2.jpeg", caption: "Manicure 2", category: "mani" },
  { src: "images/mani3.jpeg", caption: "Manicure 3", category: "mani" },
  { src: "images/mani4.jpeg", caption: "Manicure 4", category: "mani" },
  { src: "images/mani5.jpeg", caption: "Manicure 5", category: "mani" },
  { src: "images/mani6.jpeg", caption: "Manicure 6", category: "mani" },
  { src: "images/mani7.jpeg", caption: "Manicure 7", category: "mani" },
  { src: "images/mani8.jpeg", caption: "Manicure 8", category: "mani" },
  { src: "images/mani9.jpeg", caption: "Manicure 9", category: "mani" },
  { src: "images/mani10.jpeg", caption: "Manicure 10", category: "mani" },
  { src: "images/mani11.jpeg", caption: "Manicure 11", category: "mani" },
  { src: "images/mani12.jpeg", caption: "Manicure 12", category: "mani" },
  { src: "images/mani13.jpeg", caption: "Manicure 13", category: "mani" },
  { src: "images/mani14.jpeg", caption: "Manicure 14", category: "mani" },
  { src: "images/mani15.jpeg", caption: "Manicure 15", category: "mani" }
  { src: "images/mani16.jpeg", caption: "Manicure 16", category: "mani" }
  { src: "images/mani17.jpeg", caption: "Manicure 17", category: "mani" }
{ src: "images/mani18.jpeg", caption: "Manicure 18", category: "mani" }
{ src: "images/mani19.jpeg", caption: "Manicure 19", category: "mani" }
{ src: "images/mani20.jpeg", caption: "Manicure 20", category: "mani" }
{ src: "images/mani21.jpeg", caption: "Manicure 12", category: "mani" }
{ src: "images/mani22.jpeg", caption: "Manicure 22", category: "mani" }
{ src: "images/mani23.jpeg", caption: "Manicure 23", category: "mani" }
{ src: "images/mani24.jpeg", caption: "Manicure 24", category: "mani" }
{ src: "images/mani25.jpeg", caption: "Manicure 25", category: "mani" }
{ src: "images/mani26.jpeg", caption: "Manicure 26", category: "mani" }
{ src: "images/mani27.jpeg", caption: "Manicure 27", category: "mani" }
{ src: "images/mani28.jpeg", caption: "Manicure 28", category: "mani" }
{ src: "images/mani29.jpeg", caption: "Manicure 29", category: "mani" }
{ src: "images/mani30.jpeg", caption: "Manicure 30", category: "mani" }
{ src: "images/mani31.jpeg", caption: "Manicure 31", category: "mani" }
{ src: "images/mani32.jpeg", caption: "Manicure 32", category: "mani" }
{ src: "images/mani33.jpeg", caption: "Manicure 33", category: "mani" }
{ src: "images/mani34.jpeg", caption: "Manicure 34", category: "mani" }
{ src: "images/mani35.jpeg", caption: "Manicure 35", category: "mani" }
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
