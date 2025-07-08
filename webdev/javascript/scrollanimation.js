document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth <= 908) return; // Disable custom scrolling on mobile

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  const sections = gsap.utils.toArray(["#homepage", "#projects", "#services"]);
  let currentIndex = 0;
  let isScrolling = false;
  let atContact = false;
  let manualScroll = false;

  function scrollToSection(index) {
    if (index < 0 || index >= sections.length || isScrolling || atContact) return;

    isScrolling = true;
    gsap.to(window, {
      duration: 1,
      scrollTo: sections[index],
      ease: "power2.inOut",
      onComplete: () => {
        currentIndex = index;
        isScrolling = false;
      }
    });
  }

  let wheelTimeout;
  window.addEventListener("wheel", (e) => {
    if (isScrolling || atContact || manualScroll) return;

    if (e.deltaY > 0) {
      scrollToSection(currentIndex + 1);
    } else if (e.deltaY < 0) {
      scrollToSection(currentIndex - 1);
    }

    clearTimeout(wheelTimeout);
    wheelTimeout = setTimeout(() => {
      const lastSection = document.querySelector("#services");
      const contact = document.querySelector("#contact");
      const lastRect = lastSection.getBoundingClientRect();

      if (lastRect.bottom <= window.innerHeight + 5 && !atContact) {
        atContact = true;
        isScrolling = true;
        gsap.to(window, {
          duration: 1,
          scrollTo: contact,
          ease: "power2.inOut",
          onComplete: () => {
            isScrolling = false;
          }
        });
      }
    }, 100);
  });

  window.addEventListener("scroll", () => {
    const contact = document.querySelector("#contact");
    const contactTop = contact.getBoundingClientRect().top;

    if (contactTop <= window.innerHeight && !manualScroll) {
      atContact = true;
    }

    const scrollY = window.scrollY || window.pageYOffset;
    if (scrollY < document.body.scrollHeight - window.innerHeight - 200) {
      atContact = false;
    }

    if (!atContact) {
      sections.forEach((section, i) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          currentIndex = i;
        }
      });
    }
  });

  window.addEventListener("keydown", (e) => {
    if (atContact && (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "PageDown" || e.key === "PageUp")) {
      manualScroll = true;
    }
  });
});
