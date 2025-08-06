document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".cv").addEventListener("click", function () {
      const link = document.createElement("a");
      link.href = "database/hezronlokweiCV.pdf";
      link.download = "HezronLokwei_CV.pdf"; // optional: rename file
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
});