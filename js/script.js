let navLinks = document.querySelectorAll("#nav-links-ul > li");
let section = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
  for (let i = 0; i < section.length; i++) {
    const rect = section[i].getBoundingClientRect();
    if (rect.top < window.innerHeight - 150 && rect.top >= -50) {
      navLinks[i].classList.add("active");
    } else {
      navLinks[i].classList.remove("active");
    }
  }
});
