// On cible le champ texte et le compteur
const emotionInput = document.getElementById('emotion');
const charCount = document.getElementById('charCount');

// On écoute ce qui se passe quand l'utilisateur tape
emotionInput.addEventListener('input', function() {
    // On récupère le nombre de caractères tapés
    const length = emotionInput.value.length;
    
    // On met à jour le compteur
    charCount.textContent = length;

    // Si on atteint la limite, on change la couleur en rouge (optionnel)
    if (length >= 500) {
        charCount.style.color = 'red';
    } else {
        charCount.style.color = '#666';
    }
});