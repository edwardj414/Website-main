


const appRoot = document.getElementById("page");
const nav = document.querySelector(".navigation");
const root = document.documentElement;
window.onload=function(){
    const endTransition = () => {
        const loader = document.querySelector(".loader");
        loader.addEventListener("transitionend", () => {
          loader.style.transform = "translateX(100%)";
          root.classList.remove("disable-hover");
        });
        loader.style.transform = "";
      };
      const startTransition = () => {
        const loader = document.querySelector(".loader");
        loader.style.transform = "translateX(100%)";
        appRoot.dataset.route = "a";
      };
      nav.addEventListener("click", e => {
        if (e.target.nodeName === "A") {
          let a = Array.from(nav.children).find(v => v.closest(".active"));
          root.classList.add("disable-hover");
          a.classList.remove("active");
          e.target.classList.add("active");
          e.preventDefault();
        }
      });
      const onRouteClick = route => {
        if (appRoot.dataset.route === route) return;
        appRoot.dataset.route = route;
        endTransition();
      };
      window.addEventListener("load", () => {
        startTransition();
      });
  }
