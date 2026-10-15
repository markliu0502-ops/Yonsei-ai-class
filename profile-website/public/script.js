const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = [...document.querySelectorAll(".nav-link")];

function closeMenu() {
  if (!menuToggle || !siteNav) return;
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "메뉴 열기");
  siteNav.classList.remove("is-open");
}

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "메뉴 열기" : "메뉴 닫기");
    siteNav.classList.toggle("is-open", !isOpen);
  });

  navLinks.forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
}

const sections = [...document.querySelectorAll("main section[id]")];
if ("IntersectionObserver" in window && sections.length) {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        const isActive = link.hash === `#${entry.target.id}`;
        link.classList.toggle("is-active", isActive);
        if (isActive) link.setAttribute("aria-current", "page");
        else link.removeAttribute("aria-current");
      });
    });
  }, { rootMargin: "-25% 0px -60% 0px" });
  sections.forEach((section) => sectionObserver.observe(section));
}

const contactForm = document.querySelector("#contact-form");
const formNote = document.querySelector("#form-note");

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;

  const formData = new FormData(contactForm);
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const subject = encodeURIComponent(`포트폴리오 문의 - ${name}`);
  const body = encodeURIComponent(`이름: ${name}\n이메일: ${email}\n\n${message}`);

  if (formNote) {
    formNote.textContent = "기본 메일 앱에서 메시지 초안을 엽니다. 메일 앱 설정을 확인해 주세요.";
  }
  window.location.href = `mailto:hong@example.com?subject=${subject}&body=${body}`;
});
