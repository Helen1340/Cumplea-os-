function mostrarVideo() {

    const contenedor =
        document.getElementById("videoContainer");

    contenedor.style.display = "block";

    const video =
        document.getElementById("video");

    video.play();

    contenedor.scrollIntoView({
        behavior: "smooth"
    });
}

function crearCorazon() {

    const corazon =
        document.createElement("div");

    corazon.classList.add("corazon");

    corazon.innerHTML = "❤️";

    corazon.style.left =
        Math.random() * 100 + "vw";

    corazon.style.fontSize =
        (Math.random() * 25 + 15) + "px";

    corazon.style.animationDuration =
        (Math.random() * 4 + 4) + "s";

    document.body.appendChild(corazon);

    setTimeout(() => {
        corazon.remove();
    }, 8000);
}

setInterval(crearCorazon, 300);