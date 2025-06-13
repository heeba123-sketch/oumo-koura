document.addEventListener('DOMContentLoaded', function() {
    // Gestion de l'aperçu de l'image et stockage base64
    const recipeImageInput = document.getElementById('recipe-image');
    const imagePreview = document.getElementById('image-preview');
    let imageData = "";

    recipeImageInput.addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                imagePreview.src = e.target.result;
                imagePreview.style.display = 'block';
                imageData = e.target.result;
            };
            reader.readAsDataURL(file);
        } else {
            imagePreview.style.display = 'none';
            imageData = "";
        }
    });

    // Gestion des ingrédients dynamiques
    const ingredientsContainer = document.getElementById('ingredients-container');
    const addIngredientBtn = document.getElementById('add-ingredient-btn');

    function addIngredientField(value = '') {
        const ingredientItem = document.createElement('div');
        ingredientItem.className = 'ingredient-item';
        ingredientItem.innerHTML = `
            <input type="text" class="ingredient-input" placeholder="Ex: 200g de farine" value="${value}" required>
            <button type="button" class="remove-ingredient-btn"><i class="fas fa-times"></i></button>
        `;
        ingredientsContainer.appendChild(ingredientItem);

        ingredientItem.querySelector('.remove-ingredient-btn').addEventListener('click', function() {
            if (ingredientsContainer.children.length > 1) {
                ingredientItem.remove();
            } else {
                ingredientItem.querySelector('.ingredient-input').value = '';
            }
        });
    }

    // Gestion des étapes dynamiques
    const instructionsContainer = document.getElementById('instructions-container');
    const addInstructionBtn = document.getElementById('add-instruction-btn');

    function addInstructionField(value = '') {
        const instructionItem = document.createElement('div');
        instructionItem.className = 'instruction-item';
        instructionItem.innerHTML = `
            <textarea class="instruction-input" placeholder="Décrivez l'étape..." required>${value}</textarea>
            <button type="button" class="remove-instruction-btn"><i class="fas fa-times"></i></button>
        `;
        instructionsContainer.appendChild(instructionItem);

        instructionItem.querySelector('.remove-instruction-btn').addEventListener('click', function() {
            if (instructionsContainer.children.length > 1) {
                instructionItem.remove();
            } else {
                instructionItem.querySelector('.instruction-input').value = '';
            }
        });
    }

    // Ajouter les premiers champs si besoin
    if (ingredientsContainer.children.length === 0) addIngredientField();
    if (instructionsContainer.children.length === 0) addInstructionField();

    addIngredientBtn.addEventListener('click', () => addIngredientField());
    addInstructionBtn.addEventListener('click', () => addInstructionField());

    // Bouton Annuler
    document.getElementById('cancel-btn').addEventListener('click', function() {
        if (confirm('Voulez-vous vraiment annuler ? Toutes les modifications seront perdues.')) {
            window.location.href = 'index.html';
        }
    });

    // Génération d'ID unique
    function generateRecipeId() {
        return 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }

    // Sauvegarde dans localStorage
    function saveToLocalStorage(recipe) {
        try {
            const userRecipes = JSON.parse(localStorage.getItem('userRecipes')) || [];
            const updatedRecipes = [...userRecipes, recipe];
            localStorage.setItem('userRecipes', JSON.stringify(updatedRecipes));
            return true;
        } catch (error) {
            console.error("Erreur de sauvegarde:", error);
            return false;
        }
    }

    // Soumission du formulaire
    document.getElementById('add-recipe-form').addEventListener('submit', function(e) {
        e.preventDefault();

        // Validation des champs requis
        const requiredFields = [
            'recipe-title', 
            'recipe-description',
            'recipe-category',
            'recipe-difficulty',
            'recipe-time'
        ];

        let isValid = true;
        requiredFields.forEach(fieldId => {
            const field = document.getElementById(fieldId);
            if (!field.value.trim()) {
                field.style.borderColor = 'red';
                isValid = false;
            } else {
                field.style.borderColor = '';
            }
        });

        // Vérifier l'image
        if (!imageData) {
            recipeImageInput.style.borderColor = 'red';
            isValid = false;
        } else {
            recipeImageInput.style.borderColor = '';
        }

        // Valider qu'au moins un ingrédient et une étape existent
        const ingredients = Array.from(document.querySelectorAll('.ingredient-input'))
            .map(input => input.value.trim())
            .filter(Boolean);

        const instructions = Array.from(document.querySelectorAll('.instruction-input'))
            .map(textarea => textarea.value.trim())
            .filter(Boolean);

        if (ingredients.length === 0 || instructions.length === 0) {
            alert('Veuillez ajouter au moins un ingrédient et une étape de préparation');
            return;
        }

        if (!isValid) {
            alert('Veuillez remplir tous les champs obligatoires');
            return;
        }

        // Construction de l'objet recette conforme à recettes.html
        const recipeData = {
            id: generateRecipeId(),
            title: document.getElementById('recipe-title').value.trim(),
            description: document.getElementById('recipe-description').value.trim(),
            category: document.getElementById('recipe-category').value,
            difficulty: document.getElementById('recipe-difficulty').value,
            time: document.getElementById('recipe-time').value.trim() + ' min',
            image: imageData,
            ingredients: ingredients,
            instructions: instructions,
            rating: 0,
            reviews: 0,
            isUserRecipe: true
        };

        // Sauvegarde
        if (saveToLocalStorage(recipeData)) {
            alert(`Recette "${recipeData.title}" ajoutée avec succès !`);
            window.location.href = 'recettes.html?recipeAdded=true';
        } else {
            alert('Une erreur est survenue lors de la sauvegarde');
        }
    });

    // Mode sombre
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            const icon = this.querySelector('i');
            if (document.body.classList.contains('dark-mode')) {
                icon.classList.replace('fa-moon', 'fa-sun');
                localStorage.setItem('theme', 'dark');
            } else {
                icon.classList.replace('fa-sun', 'fa-moon');
                localStorage.setItem('theme', 'light');
            }
        });

        // Appliquer le thème sombre au chargement si besoin
        if (localStorage.getItem('theme') === 'dark') {
            document.body.classList.add('dark-mode');
            themeToggle.querySelector('i').className = 'fas fa-sun';
        }
    }
});