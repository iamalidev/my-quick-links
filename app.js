document.addEventListener("DOMContentLoaded", () => {
  const profileImg = document.querySelector(".profile-img");
  const nameElement = document.querySelector(".name");
  const titleElement = document.querySelector(".title");
  const links = document.querySelectorAll(".link");

  setTimeout(() => {
    profileImg.classList.add("is-animated");
  }, 300);

  setTimeout(() => {
    nameElement.classList.add("is-animated");
  }, 500);

  setTimeout(() => {
    titleElement.classList.add("is-animated");
  }, 600);

  links.forEach((link, index) => {
    setTimeout(() => {
      link.classList.add("is-animated");
    }, 700 + index * 70);
  });
});
