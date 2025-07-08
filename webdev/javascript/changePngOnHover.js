window.onload = function () {
    const emailIcon = document.getElementById("emailIcon");
    const optionIcon = document.getElementById("optionIcon");

    if (emailIcon) {
        emailIcon.addEventListener("mouseenter", () => {
            emailIcon.src = "icons/apps/emailPurple.png";
        });
        emailIcon.addEventListener("mouseleave", () => {
            emailIcon.src = "icons/apps/emailWhite.png";
        });
    }

    if (optionIcon) {
        optionIcon.addEventListener("mouseenter", () => {
            optionIcon.src = "icons/apps/optionPurple.png";
        });
        optionIcon.addEventListener("mouseleave", () => {
            optionIcon.src = "icons/apps/optionWhite.png";
        });
    }

    // Social icons
    const socials = document.querySelectorAll(".social img");
    socials.forEach(icon => {
        const src = icon.getAttribute("src");

        if (src.includes("x.png")) {
            icon.addEventListener("mouseenter", () => {
                icon.src = "icons/apps/xPurple.png";
            });
            icon.addEventListener("mouseleave", () => {
                icon.src = "icons/apps/x.png";
            });
        }

        if (src.includes("telegram.png")) {
            icon.addEventListener("mouseenter", () => {
                icon.src = "icons/apps/telegramPurple.png";
            });
            icon.addEventListener("mouseleave", () => {
                icon.src = "icons/apps/telegram.png";
            });
        }

        if (src.includes("whatsapp.png")) {
            icon.addEventListener("mouseenter", () => {
                icon.src = "icons/apps/whatsappPurple.png";
            });
            icon.addEventListener("mouseleave", () => {
                icon.src = "icons/apps/whatsapp.png";
            });
        }
    });
};