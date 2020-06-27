import AnimateNumbers from "./animate-numbers.js";

export default function initFetchAnimals() {
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.specie}</h3>
     <span data-number>${animal.total}</span>`;

    return div;
  }

  async function fetchAnimals(url) {
    try {
      const animals = await (await fetch(url)).json();
      const numerosGrid = document.querySelector(".numeros-grid");

      animals.forEach((animal) => {
        const divAnimal = createAnimal(animal);
        numerosGrid.appendChild(divAnimal);
      });

      const animateNumbers = new AnimateNumbers(
        "[data-number]",
        ".numeros",
        "ativo"
      );

      animateNumbers.init();
    } catch (error) {
      console.error(Error(error));
    }
  }

  fetchAnimals("/animais.api.json");
}
