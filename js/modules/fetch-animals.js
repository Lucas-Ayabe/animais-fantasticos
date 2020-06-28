import AnimateNumbers from "./animate-numbers.js";

export default function fetchAnimals(url, target) {
  const numerosGrid = document.querySelector(target);

  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.specie}</h3>
     <span data-number>${animal.total}</span>`;

    return div;
  }

  function appendAnimals(animal) {
    numerosGrid.appendChild(createAnimal(animal));
  }

  function animateNumbers() {
    new AnimateNumbers("[data-number]", ".numeros", "ativo").init();
  }

  async function createAnimals() {
    try {
      const animals = await (await fetch(url)).json();
      animals.forEach(appendAnimals);
      animateNumbers();
    } catch (error) {
      console.error("Erro: ");
      console.error(Error(error));
    }
  }

  return createAnimals();
}
