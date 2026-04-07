const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
};


ScrollReveal().reveal(".card", {
    ...scrollRevealOption,
    origin: "left",
    delay: 400,
});

ScrollReveal().reveal(".slider-wrapper", {
    ...scrollRevealOption,
    origin: "rigth",
    delay: 200,
});