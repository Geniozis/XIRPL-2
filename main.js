let currentIndex = 0;
let autoSlideInterval;

function showSlides(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    document.querySelector('.slides').style.transform = `translateX(${-currentIndex * 100}%)`;
}

function moveSlide(n) {
    showSlides(currentIndex + n);
    resetAutoSlide();
}
function autoSlide() {
    autoSlideInterval = setInterval(() => {
        showSlides(currentIndex + 1);
    }, 5000); // Change image every 5 seconds
}
function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlide();
}
window.onload = function() {
    showSlides(currentIndex);
    autoSlide();
};

// card item
// Ambil semua elemen card-item
const cardItems = document.querySelectorAll('.card-item');

// Tambahkan event listener ke setiap card-item
cardItems.forEach(card => {
    card.addEventListener('click', function() {
        const popup = this.querySelector('.popup');
        popup.style.display = 'flex'; // Tampilkan popup
    });
});

// Tutup popup ketika tombol 'x' ditekan
const closeButtons = document.querySelectorAll('.close');
closeButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        event.stopPropagation(); 
        const popup = this.closest('.popup');
        popup.style.display = 'none';
    });
});

// Tutup popup ketika klik di luar konten
window.addEventListener('click', function(event) {
    const popups = document.querySelectorAll('.popup');
    popups.forEach(popup => {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});

// popup logo geniozis

const openG= document.getElementById('open-geniozis');
const closeG= document.getElementById('close-g');
const popupG= document.querySelector('.geniozis-popup');

openG.addEventListener('click', function(){
    popupG.style.display= "flex";
})
closeG.addEventListener('click', function(){
    popupG.style.display= "none";
})
