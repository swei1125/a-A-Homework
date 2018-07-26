document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items

  // --- your code here!
  const addPlace = (e) => {
    e.preventDefault();
    const placeInput = document.querySelector(".favorite-input");
    const placeName = placeInput.value;

    placeInput.value = "";
    const ul = document.getElementById("sf-places");
    const li = document.createElement("li");
    li.textContent = placeName;
    ul.appendChild(li);
  };

  document.querySelector(".favorite-submit").addEventListener("click", addPlace);


  // adding new photos

  // --- your code here!

  document.querySelector(".photo-show-button").addEventListener("click", (e) => {
    e.preventDefault();
    const form = document.querySelector(".hidden");
    form.classList.remove("hidden");
  });


  document.querySelector(".photo-url-submit").addEventListener("click", (e) => {
    e.preventDefault();
    const input = document.querySelector(".photo-url-input");
    const url = input.value;
    input.value = "";
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = url;
    li.appendChild(img);
    const ul = document.querySelector(".dog-photos");
    ul.appendChild(li);
  });

});
