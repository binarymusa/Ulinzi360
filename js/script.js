function initMenu() {

  const menuBtn = document.querySelector(".menu-btn");
  const mobileMenu = document.querySelector(".mobile-menu");

  if (!menuBtn || !mobileMenu) return;

  menuBtn.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");

    document.body.style.overflow =
      mobileMenu.classList.contains("active")
        ? "hidden"
        : "auto";
  });

  document.querySelectorAll(".mobile-menu a").forEach(link => {

    link.addEventListener("click", () => {

      mobileMenu.classList.remove("active");
      document.body.style.overflow = "auto";

    });

  });

}

//* ==========================Universal Tabs ========================== */

document.querySelectorAll(".tabs-section").forEach(section => {

    const buttons = section.querySelectorAll(".tab-btn");
    const cards = section.querySelectorAll(".pricing-card");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            buttons.forEach(btn => btn.classList.remove("active"));
            cards.forEach(card => card.classList.remove("active"));

            button.classList.add("active");

            const target = button.dataset.target;

            section.querySelector("#" + target).classList.add("active");

        });

    });

});