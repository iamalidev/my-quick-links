document.addEventListener("DOMContentLoaded", () => {
  const profileImg = document.querySelector(".profile-img");
  const nameElement = document.querySelector(".name");
  const titleElement = document.querySelector(".title");
  const links = document.querySelectorAll(".link");

  // Check for saved theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
  }

  // Theme toggle handler
  profileImg.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    // Save theme preference
    const isLightMode = document.body.classList.contains('light-mode');
    localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
  });

  // Initial animations
  setTimeout(() => {
    profileImg.classList.add("is-animated");
  }, 200);

  setTimeout(() => {
    nameElement.classList.add("is-animated");
  }, 400);

  setTimeout(() => {
    titleElement.classList.add("is-animated");
  }, 600);

  links.forEach((link, index) => {
    setTimeout(() => {
      link.classList.add("is-animated");
    }, 800 + index * 100);
  });
});
