# 20 React: React Portfolio

## About this project

This project was done as part of the assignments in the UC Berkeley full stuck web developer coding bootcamp. In this assignment, the students are tasked to build a portfolio page with React meeting the following requirements from scratch:

- Has About Me, Portfolio, Contact, and Resume pages
- Navigation highlights the current page
- Home page redirects to the About Me page
- Contact page validate the empty field and email address
- Resume pages link to a downloadable resume and developers's skill list
- Footer contains links to GitHub, Linkedin and something else

## Resources referenced while developing this project

- [Fit website background image to screen size : stackoverflow](https://stackoverflow.com/questions/19925075/fit-website-background-image-to-screen-size)
- [What is the easiest way to change the default font in Reactstrap? : stackoverflow](https://stackoverflow.com/questions/52300289/what-is-the-easiest-way-to-change-the-default-font-in-reactstrap)
- [How to unstyle anchor when using bootstrap : stackoverflow](https://stackoverflow.com/questions/22429881/how-to-unstyle-anchor-when-using-bootstrap)


## Things learnt from this challenge

- View height for the single page application is defined by the longest content of all the child components that can possibly appear on that page. I struggled to set the footer at the bottom of the page while not using `fixed-bottom` class - which overlaps the main content when the main content is longer than the view port. I decided to add `min-height: 75vh;` which will make the footer appear at the bottom of the screen even with the large screen, while not leaving too much space between the bottom of the content and the footer in the pages with shorter content. 

---

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
