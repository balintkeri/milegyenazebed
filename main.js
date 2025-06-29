
// Load dishes from dishes.json
let dishes = [];

fetch('dishes.json')
    .then(response => response.json())
    .then(data => {
        dishes = data;
    })
    .catch(error => {
        console.error('Error loading dishes:', error);
        dishes = [];
    });
// Note: Making a pull request to a GitHub repository from client-side JavaScript is not possible due to authentication and CORS restrictions.
// Typically, you would need a backend server to handle GitHub API authentication and create the pull request.
// The add button below only updates the local array, not the dishes.json file in your repository.
// Display random dish
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