document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".cv").addEventListener("click", () => {
        const link = document.createElement("a");
        link.href = "media/hezronlokweiCV.pdf";
        link.download = "hezronlokweiCV.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});