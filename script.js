function fetchMultipleUsers() {
  fetch("https://randomuser.me/api/?results=4")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      displayMultipleUsers(data.results);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      alert("Помилка при отриманні даних. Спробуйте ще раз.");
    });
}

function displayMultipleUsers(users) {
  const cards = document.querySelectorAll(".user-card");

  cards.forEach((card, index) => {
    const user = users[index];

    card.querySelector(".user-image").src = user.picture.large;
    card.querySelector(".cell").textContent = user.cell;
    card.querySelector(".city").textContent = user.location.city;
    card.querySelector(".email").textContent = user.email;
    card.querySelector(
      ".coordinates"
    ).textContent = `${user.location.coordinates.latitude}, ${user.location.coordinates.longitude}`;

    setTimeout(() => {
      card.classList.add("visible");
    }, index * 200);
  });
}

fetchMultipleUsers();
