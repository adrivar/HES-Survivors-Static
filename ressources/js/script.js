document.addEventListener("DOMContentLoaded", () => {
  // 1. Sélectionner les éléments
  const hamburger = document.querySelector(".hamburger");
  const navList = document.querySelector("header nav ul");

  if (hamburger && navList) {
    // 2. Écouter l'événement de clic sur le hamburger
    hamburger.addEventListener("click", () => {
      // 3. Basculer la classe 'open' sur la liste <ul>
      // Le CSS gère l'affichage/masquage des <li> basés sur la présence de cette classe
      navList.classList.toggle("open");
    });
  }
});
