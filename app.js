document.addEventListener("DOMContentLoaded", () => {
  const profileImg = document.querySelector(".profile-img");
  const nameElement = document.querySelector(".name");
  const titleElement = document.querySelector(".title");
  const links = document.querySelectorAll(".link");

  setTimeout(() => {
    profileImg.classList.add("is-animated");
  }, 100);

  setTimeout(() => {
    nameElement.classList.add("is-animated");
  }, 200);

  setTimeout(() => {
    titleElement.classList.add("is-animated");
  }, 300);

  links.forEach((link, index) => {
    setTimeout(() => {
      link.classList.add("is-animated");
    }, 400 + index * 50);
  });
});
