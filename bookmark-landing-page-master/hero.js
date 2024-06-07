const questions = document.querySelectorAll(".question_accordion");
const answers = document.querySelectorAll(".answer");
// bookmark feature list li
const bookmark_feature = document.querySelectorAll(".bookmark_feature-list li");
const bookmark_img = document.querySelector(".bookmark_org img");
const feature_heading = document.querySelector(".bookmark_orgdetail h2");
const feature_detail = document.querySelector(".bookmark_orgdetail p");

// form email
const input = document.querySelector(".join_form input");
const input_btn = document.querySelector(".join_form button");
const error_msg = document.querySelector(".error-message");
const error_icon = document.querySelector(".error_icon");
//navbar
const join = document.querySelector(".join");
// const hamburger=document.querySelector(".hamburger")
const bookmark_icon = document.querySelector(".bookmark_icon");
const bookmark = document.querySelector(".bookmark");
const navbar = document.querySelector(".navbar");
const hamburger = document.querySelector(".hamburger");
const nav_list = document.querySelector(".nav_list");
const close = document.querySelector(".close");
const footer = document.querySelector(".footer");
const logo = document.querySelector(".hide");

// main section
const main = document.querySelector("main");
// navbar feature on click
hamburger.addEventListener("click", () => {
  navbar.classList.add("header");
  footer.style.display = "none";
  close.style.display = "block";
  join.style.display = "none";
  hamburger.style.display = "none";
  bookmark.classList.add("bookmark_clicked");
  bookmark_icon.classList.add("start");
  nav_list.classList.add("nav_list-add");
  nav_list.style.display = "flex";
  logo.style.display = "flex";
});
// navbar close icon when clicked
close.addEventListener("click", function () {
  navbar.classList.remove("header");
  bookmark.classList.remove("bookmark_clicked");
  footer.style.display = "grid";
  join.style.display = "flex";
  bookmark_icon.classList.remove("start");
  hamburger.style.display = "block";
  this.style.display = "none";
  nav_list.style.display = "none";
  nav_list.classList.remove("nav_list-add");
  logo.style.display = "none";
});
// bookmark feature
bookmark_feature[0].classList.add("border_red");
bookmark_feature.forEach((feature, index) => {
  feature.addEventListener("click", () => {
    if (index === 0) {
      bookmark_img.src = "./images/illustration-features-tab-11.svg";
      feature_heading.textContent = "Bookmark in one click";
      feature_detail.textContent = `Organize your bookmarks however you like. Our simple drag-and-drop interface 
    gives you complete control over how you manage your favourite sites.`;
      bookmark_feature[index + 1].classList.remove("border_red");
      bookmark_feature[index + 2].classList.remove("border_red");
      feature.classList.add("border_red");
    }
    if (index === 1) {
      bookmark_img.src = "./images/illustration-features-tab-2.svg";
      feature_heading.textContent = "Intelligent search";
      feature_detail.textContent = `Our powerful search feature will help you find saved sites in no time at all. 
      No need to trawl through all of your bookmarks.`;
      bookmark_feature[index - 1].classList.remove("border_red");
      bookmark_feature[index + 1].classList.remove("border_red");
      feature.classList.add("border_red");
    }
    if (index === 2) {
      bookmark_img.src = "./images/illustration-features-tab-3.svg";
      feature_heading.textContent = "Share your bookmarks";
      feature_detail.textContent = `Easily share your bookmarks and collections with others. Create a shareable 
      link that you can send at the click of a button.`;
      bookmark_feature[index - 1].classList.remove("border_red");
      bookmark_feature[index - 2].classList.remove("border_red");
      feature.classList.add("border_red");
    }
  });
});

// faq section
questions.forEach((question, index) => {
  question.addEventListener("click", () => {
    const answer = answers[index];
    if (answer.classList.contains("visible")) {
      answer.classList.remove("visible");
    } else {
      answer.classList.add("visible");
    }
  });
});
// form email
input_btn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(input.value);
  if (input.value.includes("@gmail.com")) {
    alert("hello world");
  } else {
    error_msg.style.display = "block";
    error_icon.style.display = "block";
    input.style.border = "2px solid red";
  }
});
