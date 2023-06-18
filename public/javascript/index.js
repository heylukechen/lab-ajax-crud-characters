const charactersAPI = new APIHandler("http://localhost:8000");

window.addEventListener("load", () => {
  document.getElementById("fetch-all").addEventListener("click", function () {
    charactersAPI.getFullList().then((data) => {
      console.log("Print the fill list =======>", data);
      let charactersContainer = document.querySelector(".characters-container");
      data.forEach((element) => {
        charactersContainer.innerHTML += `
        <div class="character-info">
          <div class="name">${element.name}</div>
          <div class="occupation">${element.occupation}</div>
          <div class="cartoon">${element.cartoon}</div>
          <div class="weapon">${element.weapon}</div>
        </div>
        `;
      });
    });
  });

  document.getElementById("fetch-one").addEventListener("click", function () {
    let idInput = document.querySelector('input[name="character-id"]');
    let charactersContainer = document.querySelector(".characters-container");
    charactersAPI.getOneRegister(idInput.value).then((element) => {
      charactersContainer.innerHTML = `<div class="character-info">
      <div class="name">${element.name}</div>
      <div class="occupation">${element.occupation}</div>
      <div class="cartoon">${element.cartoon}</div>
      <div class="weapon">${element.weapon}</div>
    </div>`;
    });
  });

  document.getElementById("delete-one").addEventListener("click", function () {
    let idInput = document.querySelector('input[name="character-id-delete"]');
    let deleteBtn = document.getElementById("delete-one");
    charactersAPI
      .deleteOneRegister(idInput.value)
      .then((element) => {
        if (element) {
          deleteBtn.style.backgroundColor = "green";
        } else {
          deleteBtn.style.backgroundColor = "red";
        }
      })
      .catch((err) => console.log(err));
  });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function (event) {
      let editBtn = document.getElementById("send-data");

      const id = document.querySelector(
        '#edit-character-form input[name="chr-id"]'
      );
      const name = document.querySelector(
        '#edit-character-form input[name="name"]'
      );
      const occupation = document.querySelector(
        '#edit-character-form input[name="occupation"]'
      );
      const weapon = document.querySelector(
        '#edit-character-form input[name="weapon"]'
      );
      const cartoon = document.querySelector(
        '#edit-character-form input[name="cartoon"]'
      );
      charactersAPI
        .updateOneRegister(id.value, {
          name: name.value,
          occupation: occupation.value,
          weapon: weapon.value,
          cartoon: cartoon.checked,
        })
        .then((element) => {
          if (element) {
            editBtn.style.backgroundColor = "green";
          } else {
            editBtn.style.backgroundColor = "red";
          }
        })
        .catch((err) => console.log(err));

      event.preventDefault();
    });

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function (event) {
      const name = document.querySelector(
        '#new-character-form input[name="name"]'
      );
      const occupation = document.querySelector(
        '#new-character-form input[name="occupation"]'
      );
      const weapon = document.querySelector(
        '#new-character-form input[name="weapon"]'
      );
      const cartoon = document.querySelector(
        '#new-character-form input[name="cartoon"]'
      );

      charactersAPI
        .createOneRegister({
          name: name.value,
          occupation: occupation.value,
          weapon: weapon.value,
          cartoon: cartoon.checked,
        })
        .then()
        .catch((err) => console.log(err));

      event.preventDefault();
    });
});
