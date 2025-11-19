const form = document.querySelector("form");
const input = document.getElementById("meteo");
const affichage = document.getElementById("affichagemeteo");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const ville = input.value.trim();

  const key = "7a3a59d140a05ded7b268a08bf35ef47";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${ville}&units=metric&lang=fr&appid=${key}`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Ville non trouvée ou clé API invalide");
      }
      return response.json();
    })
    .then((data) => {
      const temp = data.main.temp;
      const description = data.weather[0].description;
      affichage.innerText = `🌡️ Température à ${data.name} : ${temp}°C— ${description}`;

    })
    .catch((err) => {
      console.error(err);
      affichage.innerText = "⚠️ Erreur entrez une ville correcte: " + err.message;
    });
});
