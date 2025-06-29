
// Load dishes from dishes.json
let dishes = [];
let dishNames = [];
fetch('dishes.json')
    .then(response => response.json())
    .then(data => {
        dishes = data;
    })
    .catch(error => {
        console.error('Error loading dishes:', error);
        dishes = [];
    });

    
console.log('Loaded dishes:', dishes);
document.getElementById('randomBtn').onclick = function() {
    if (dishes.length === 0) {
        document.getElementById('dishDisplay').textContent = "No dishes available.";
        return;
    }
    const randomIndex = Math.floor(Math.random() * dishes.length);
    document.getElementById('dishDisplay').textContent = dishes[randomIndex];
};

// Add new dish
document.getElementById('addBtn').onclick = function() {
    const newDish = document.getElementById('newDishInput').value.trim();
    if (newDish) {
        dishes.push(newDish);
        document.getElementById('newDishInput').value = '';
        alert('Dish added!');
    }
};