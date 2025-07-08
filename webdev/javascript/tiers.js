document.addEventListener("DOMContentLoaded", function () {
  const tierData = {
    basic:    [1, 1, 1, 0, 0, 0],
    standard: [0, 0, 0, 1, 0, 0],
    premium:  [0, 0, 0, 0, 1, 1]
  };

  const tierPrices = {
    basic: "$300–$500",
    standard: "$600–$900",
    premium: "$1000–$1500+"
  };

  // For each .service block
  document.querySelectorAll(".service").forEach(service => {
    const tickSpans = service.querySelectorAll(".tierlist .tick");
    const priceDisplay = service.querySelector(".price p");
    const tierButtons = service.querySelectorAll(".tierNav");

    function updateTicks(tier) {
      const values = tierData[tier];
      tickSpans.forEach((tick, index) => {
        tick.textContent = values[index] ? "✅" : "❌";
      });
      priceDisplay.textContent = tierPrices[tier];
    }

    // Attach click events to each tierNav in this service block
    tierButtons.forEach(button => {
      button.addEventListener("click", () => {
        const tier = button.innerText.trim().toLowerCase();
        updateTicks(tier);
      });
    });

    // Initialize default to BASIC
    updateTicks("basic");
  });
});