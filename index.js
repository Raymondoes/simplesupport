function invbut(){
  location.replace('https://discord.com/oauth2/authorize?client_id=1062733677513158687&scope=bot%20applications.commands&permissions=2146958847');
}
function invbut2(){
  location.replace('https://discord.com/oauth2/authorize?client_id=1062733677513158687&scope=bot%20applications.commands&permissions=2146958847');
}
function guidelines(){
  location.replace('guidelines.html');
}
function discinv(){
  location.replace(`https://discord.gg/MEAsNfnW6w`);
}
function feats(){
  document.getElementById(`info`).scrollIntoView();
}

document.addEventListener("DOMContentLoaded", () => {
  const menuItems = document.querySelectorAll(".menu-item");

  menuItems.forEach((item) => {
    const header = item.querySelector(".menu-header");
    const content = item.querySelector(".menu-content");
    const icon = item.querySelector(".menu-icon");

    header.addEventListener("click", () => {
      const isHidden = content.classList.contains("hidden");

      // Toggle visibility
      content.classList.toggle("hidden", !isHidden);
      icon.classList.toggle("rotate-180", isHidden);
    });
  });
});

