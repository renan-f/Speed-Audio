const interval = setInterval(() => {
    const header = document.querySelector("._3auIg");
    if (header) {
        clearInterval(interval);

        const button = document.createElement("button");
        button.innerHTML = "2X";
        button.classList.add("twoTimesButton");
        header.appendChild(button);

        button.addEventListener("click", () => {
            const audios = document.querySelectorAll("audio");
            if (button.classList.contains("active")) {
                audios.forEach((audio) => {
                    audio.playbackRate = 1;
                });
                button.classList.toggle("active");
            } else {
                audios.forEach((audio) => {
                    audio.playbackRate = 2;
                });
                button.classList.toggle("active");
            }

        })

    }
}, 1000);