document.addEventListener("DOMContentLoaded", () => {
  const profileImg = document.querySelector(".profile-img");
  const nameElement = document.querySelector(".name");
  const titleElement = document.querySelector(".title");
  const links = document.querySelectorAll(".link");

  setTimeout(() => {
    profileImg.classList.add("is-animated");
  }, 100); // 0.1s

  setTimeout(() => {
    nameElement.classList.add("is-animated");
  }, 800); // 0.8s

  setTimeout(() => {
    titleElement.classList.add("is-animated");
  }, 900); // 0.9s

  links.forEach((link, index) => {
    setTimeout(() => {
      link.classList.add("is-animated");
    }, 1000 + index * 100); // 1s, 1.1s, 1.2s, 1.3s
  });
});
