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

/* ==========================
   CyberShield Tabs
========================== */

const tabButtons = document.querySelectorAll(".tab-btn");

const plans = document.querySelectorAll(".plans-container .pricing-card");

tabButtons.forEach(button => {

    button.addEventListener("click", () => {

        tabButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        plans.forEach(plan =>
            plan.classList.remove("active")
        );

        button.classList.add("active");

        document
            .getElementById(button.dataset.plan)
            .classList.add("active");

    });

});