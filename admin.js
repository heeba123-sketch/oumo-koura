// Sidebar toggle
document.querySelector('.sidebar-toggle').addEventListener('click', function() {
    document.querySelector('.admin-sidebar').classList.toggle('collapsed');
});

// Statistiques dynamiques (exemple avec localStorage)
function updateStats() {
    // Exemple : nombre de recettes
    const userRecipes = JSON.parse(localStorage.getItem('userRecipes')) || [];
    // Si tu as un tableau de baseRecipes, ajoute-les ici
    const baseRecipes = []; // Remplis-le si besoin
    const totalRecipes = baseRecipes.length + userRecipes.length;
    document.querySelector('.stat-card .stat-number').textContent = totalRecipes;

    // Tu peux faire pareil pour utilisateurs, réservations, commentaires...
    // document.querySelector('.stat-card .stat-number').textContent = ...;
}

// Chart.js - Réservations par mois (exemple)
const reservationsCtx = document.getElementById('reservationsChart').getContext('2d');
const reservationsChart = new Chart(reservationsCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'],
        datasets: [{
            label: 'Réservations',
            data: [12, 19, 15, 22, 30, 25, 28, 24, 20, 18, 15, 10],
            backgroundColor: 'rgba(56, 142, 60, 0.2)',
            borderColor: 'rgba(56, 142, 60, 1)',
            borderWidth: 2,
            fill: true,
            tension: 0.3
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false }
        }
    }
});

// Chart.js - Recettes populaires (exemple)
const popularRecipesCtx = document.getElementById('popularRecipesChart').getContext('2d');
const popularRecipesChart = new Chart(popularRecipesCtx, {
    type: 'bar',
    data: {
        labels: ['Tajine', 'Couscous', 'Pastilla', 'Harira', 'Briouat'],
        datasets: [{
            label: 'Nombre de vues',
            data: [120, 95, 80, 60, 45],
            backgroundColor: [
                '#b85c38', '#e7ab79', '#388e3c', '#f7c873', '#a04d2e'
            ]
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false }
        }
    }
});

// Mettre à jour les stats au chargement
updateStats();