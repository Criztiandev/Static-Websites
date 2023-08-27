const hamburgerBtn = document.querySelector(".hamburger-btn");
const navigationParent = document.querySelector(".navigation");
const navigationList = document.querySelector(".desktop");
const sidebar = document.querySelector(".sidebar");

const handleActiveSidebar = () => {
  // add a active class list for the hamburger button
  hamburgerBtn.classList.add("active");

  // dont let the user scroll the body
  document.body.style.overflow = "hidden";

  //create a backdrop and append it to the body
  const backdrop = document.createElement("div");
  backdrop.classList.add("backdrop");
  backdrop.classList.add("mobile");

  // reveal the navigation list
  navigationList.style.display = "flex";

  // remove the hamburger img from the hamburger button
  hamburgerBtn.innerHTML = "";

  // append the navigation list to the backdrop
  backdrop.appendChild(navigationList);

  // append the backdrop to the body
  document.body.appendChild(backdrop);
};

const handleDeactiveSidebar = () => {
  // remove the active
  hamburgerBtn.classList.remove("active");

  //restore the img to the hamburger button
  hamburgerBtn.innerHTML = `<img src="./assets/images/icon-menu.svg" alt="hamburger icon" />`;

  // unappend the navigation list from the backdrop
  document.querySelector(".backdrop").removeChild(navigationList);

  // append it to the right place
  navigationParent.appendChild(navigationList);
  navigationList.style.display = "";

  // remove the backdrop
  document.querySelector(".backdrop").remove();

  // remove attribute from the body
  document.body.removeAttribute("style");
};

const handleHamburger = (e) => {
  e.preventDefault();
  sidebar.classList.toggle("active");

  return sidebar.classList.contains("active")
    ? handleActiveSidebar()
    : handleDeactiveSidebar();
};

hamburgerBtn.addEventListener("click", handleHamburger);
