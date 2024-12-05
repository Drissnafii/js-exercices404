// EXERCICES 
// 1. Changer la couleur du corps de la page lors d'un clic.
// 2. Afficher une alerte avec un message personnalisé lors d'un clic sur un bouton.
// 3. Afficher la position de la souris sur la page en temps réel.
// 4. Créer une boîte modale qui s'affiche et se ferme avec un bouton.
// 5. Compter le nombre de fois qu'un bouton est cliqué.
// 6. Alterner la visibilité d'un élément lors d'un clic (montrer/cacher).
// 7. Modifier le texte d'un élément au survol de la souris.
// 8. Valider un champ de saisie pour qu'il contienne au moins 5 caractères.
// 9. Ajouter une classe CSS à un élément lors d'un clic.
// 10. Créer une minuterie qui affiche un compte à rebours sur la page.


// exercice 01 ==> function 01

function changeColor() {

    let changeColor = document.querySelector('body')
    if (changeColor.style.backgroundColor === 'wheat') {
        changeColor.style.backgroundColor = 'yellow';
    } else {
        changeColor.style.backgroundColor = 'wheat';
    } 
}
// ==> cretive mode
let color01 = document.querySelector('.green')
let bodyy = document.querySelector('body')
color01.addEventListener('onclick', function () {
    bodyy.style.backgroundColor = rgb(199, 234, 197)
})

// exercice 02 ==> function 02
function alertFn() {
    alert('Button clicked')
}

// 3. Afficher la position de la souris sur la page en temps réel.

let divLocation = document.getElementById('x3')
x3.addEventListener('mousemove', function (event) {
    const x = event.clientX
    const y = event.clientY

    document.getElementById('X').textContent = `M(${x}, ${y})`
})

// 4. Créer une boîte modale qui s'affiche et se ferme avec un bouton.

