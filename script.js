const offers = document.querySelectorAll(".offer");
const radios = document.querySelectorAll(".offer__radio");

function setActiveOffer(selectedValue) {
  offers.forEach((offer) => {
    const value = offer.getAttribute("data-offer");
    const content = offer.querySelector(".offer__content");

    if (value === selectedValue) {
      offer.classList.add("offer--active");
      if (content) {
        content.classList.add("offer__content--expanded");
      }
    } else {
      offer.classList.remove("offer--active");
      if (content) {
        content.classList.remove("offer__content--expanded");
      }
    }
  });
}

// radio change
radios.forEach((radio) => {
  radio.addEventListener("change", (e) => {
    setActiveOffer(e.target.value);
  });
});

// click anywhere on row
offers.forEach((offer) => {
  const inner = offer.querySelector(".offer__inner");
  const radio = offer.querySelector(".offer__radio");
  if (!inner || !radio) return;

  inner.addEventListener("click", () => {
    radio.checked = true;
    setActiveOffer(radio.value);
  });
});

// initial state: 2 Unit open
setActiveOffer("2");
