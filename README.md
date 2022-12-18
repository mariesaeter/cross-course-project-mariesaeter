# Rainydays - Ecommerce website
Simple e-commerce website for sale of rainjackets to male and woman age 30-50.

> Live demo [_here_](https://quizzical-lewin-416d7a.netlify.app)

<img width="1440" alt="rainydays-frontpage-screenshot" src="https://user-images.githubusercontent.com/96269610/206461194-9f75b4bd-7c3e-404b-a9d9-9fb7f8cfefc9.png">

## Description
An e-commerce website for a fictive jacket store. Made during Noroff School of Technology and Digital Media year 1 of Front-End Development for a cross-course project. Later added js in the course JavaScript 1.

+ The project's goal was to use what I had learned of HTML and CSS in action.
+ The website is built responsive without the use of any framework.
+ All design choices have been done by me, except from the logo which was given in the assignment.

## Built with
+ HTML
+ CSS
+ Vanilla JavaScript

## Getting Started
### Installing
1. Clone the repo
```bash
git clone https://github.com/mariesaeter/cross-course-project-mariesaeter.git
```
no dependencies

## Contributing
### Issues
Feel free to submit issues and requests for improvements.

### Pull requests

1. Fork the repo on GitHub
2. Install the repo on your own computer
3. Commit changes to the new branch you created
4. Push your work up to your fork
5. Submit a Pull request so that your changes can be reviewed

## Contact
[My LinkedIn Page](www.linkedin.com/in/marie-sæter-954821207) 
Feel free to contact me!

## Acknowledgement
### Inspiration
#### Hamburger menu
The toggle of the hamburger menu is inspired by [ljc-dev at dev.to](https://dev.to/ljcdev/easy-hamburger-menu-with-js-2do0)
```

const menu = document.querySelector(".menu");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const openMenu = document.querySelector(".open-menu");
const menuItems = document.querySelectorAll(".menu-item");
const hamburgerIcon = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".close");

// function for toggeling hamburger menu
function toggleMenu() {
  if (menu.classList.contains("openMenu")) {
    menu.classList.remove("openMenu");
    menu.style.display = "none";
    closeIcon.style.display = "none";
    hamburgerIcon.style.display = "block";
  } else {
    menu.classList.add("openMenu");
    menu.style.display = "block";
    closeIcon.style.display = "block";
    hamburgerIcon.style.display = "none";
  }
}

hamburgerBtn.addEventListener("click", toggleMenu);

menuItems.forEach(function (menuItem) {
  menuItem.addEventListener("click", toggleMenu);
});

```
#### In jacket-specific.js
The color choices (radio buttons) on the jacket specific page is heavily inspired by [this tutorial on javascripttutorial.net](https://www.javascripttutorial.net/javascript-dom/javascript-radio-button/)

```
function createColorArray(jacketDetails) {
  const colorArray = jacketDetails.attributes[1].options;

  console.log(colorArray);
  // create the radio inputs and group them
  colorContainer.innerHTML = colorArray
    .map(
      (
        color
      ) => `<div class=${color}><input type="radio" name="color" value="${color}" id="${color}">
                <label for="${color}"></label></div>`
    )
    .join(" ");
  // change event for choice of radio button
  const radio = document.querySelectorAll('input[name="color"]');
  for (const radioButton of radio) {
    radioButton.addEventListener("change", showSelected);
  }
  // output
  function showSelected(e) {
    console.log(e);
    if (this.checked) {
      document.querySelector(
        "#color-output"
      ).innerText = `Color: ${this.value}`;
    }
  }
}

```

### Images and icons

Images are retrieved from [unsplash.com](https://unsplash.com)

Icons are from the Autoicon plugin in Adobe XD and belong to the Carbon package

