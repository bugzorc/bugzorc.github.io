function playVideo(element) {
    const image = element.querySelector("img");
    const video = element.querySelector("video");
    image.style.opacity = "0";
    video.style.opacity = "1";
}

function showImage(element) {
    const image = element.querySelector("img");
    const video = element.querySelector("video");
    video.style.opacity = "0";
    image.style.opacity = "1";
}    