var homeBackgroundMusic = new Audio("images/music.mp3");
homeBackgroundMusic.loop = true;

function home() {
    homeBackgroundMusic.play()
        .then(() => {
            console.log("Music started");
        })
        .catch((error) => {
            console.log("Autoplay blocked:", error);
        });
}