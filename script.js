document.addEventListener("DOMContentLoaded", function () {
    const charactersContainer = document.getElementById("characters-container");
    const roleButtons = document.getElementById("role-buttons");

    // Array of characters by role
    const characters = {
        tank: ["Ash", "Atlas", "Azaan", "Barik", "Fernando", "Inara", "Khan", "Makoa", "Nyx", "Raum", "Ruckus", "Terminus", "Torvald", "Yagorath"],
        damage: ["Betty la Bomba", "Bomb King", "Cassie", "Dredge", "Drogoz", "Imani", "Kasumi", "Kinessa", "Lian", "Octavia", "Saati", "Sha Lin", "Strix", "Tiberius", "Tyra", "Viktor", "Vivian", "Willo"],
        flank: ["Androxus", "Buck", "Caspian", "Evie", "Koga", "Lex", "Maeve", "Moji", "Skye", "Talus", "VII", "Vatu", "Vora", "Zhin"],
        support: ["Corvus", "Furia", "Grohk", "Grover", "Io", "Jenos", "Lillith", "Mal'Damba", "Pip", "Rei", "Seris", "Ying"]
    };

    // Display all characters initially
    displayCharacters(characters.tank.concat(characters.damage, characters.flank, characters.support));

    // Event listeners for role buttons
    document.getElementById("all").addEventListener("click", () => displayCharacters(characters.tank.concat(characters.damage, characters.flank, characters.support)));
    document.getElementById("tank").addEventListener("click", () => displayCharacters(characters.tank));
    document.getElementById("damage").addEventListener("click", () => displayCharacters(characters.damage));
    document.getElementById("flank").addEventListener("click", () => displayCharacters(characters.flank));
    document.getElementById("support").addEventListener("click", () => displayCharacters(characters.support));

    // Function to display characters based on role
    function displayCharacters(charactersList) {
        charactersContainer.innerHTML = ""; // Clear previous display
        charactersList.forEach(character => {
            const characterDiv = document.createElement("div");
            characterDiv.classList.add("character");
            characterDiv.innerText = character;

            // Add portrait image
            const portraitImg = document.createElement("img");
            portraitImg.src = `images/${character.toLowerCase().replace(/\s/g, '-')}.jpg`;
            portraitImg.alt = `${character} Portrait`;
            characterDiv.appendChild(portraitImg);

            charactersContainer.appendChild(characterDiv);
        });
    }
});