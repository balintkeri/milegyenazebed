// Load dishes from dishes.json
let dishes = [];
let dishNames = [];
fetch('dishes.json')
    .then(response => response.json())
    .then(data => {
        dishes = data;
        console.log('Loaded dishes:', dishes);
    })
    .catch(error => {
        console.error('Error loading dishes:', error);
        dishes = [];
    });

document.getElementById('randomBtn').onclick = function() {
    if (dishes.length === 0) {
        document.getElementById('dishDisplay').textContent = "No dishes available.";
        return;
    }
    const randomIndex = Math.floor(Math.random() * dishes.length);
    // Show the name property if it's an object, otherwise show the string
    const dish = dishes[randomIndex];
    document.getElementById('dishDisplay').textContent = dish.name ? dish.name : dish;
};

// Remove the old addBtn onclick handler, as adding is now via GitHub

// Random healthy food background images (royalty-free, unsplash)
const bgImages = [
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80", // salad
    "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=1200&q=80", // avocado toast
    "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1663852297555-e2c68137106b?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // smoothie bowl
];
const randomBg = bgImages[Math.floor(Math.random() * bgImages.length)];
document.addEventListener('DOMContentLoaded', () => {
    const bgDiv = document.getElementById('bgImage');
    if (bgDiv) {
        bgDiv.style.backgroundImage = `url('${randomBg}')`;
    }
});