# 20 React: React Portfolio

## About this project

This project was done as part of the assignments in the UC Berkeley full stuck web developer coding bootcamp. In this assignment, the students are tasked to build a portfolio page with React meeting the following requirements from scratch:

- Has About Me, Portfolio, Contact, and Resume pages
- Navigation highlights the current page
- Home page redirects to the About Me page
- Contact page validate the empty field and email address
- Resume pages link to a downloadable resume and developers's skill list
- Footer contains links to GitHub, Linkedin and something else

## Use
- [Deployed page](https://zesty-melba-a3640a.netlify.app/)
- ![Screenshot](https://github.com/mitsukaichi/react-portfolio/assets/45612744/2448602c-b504-4793-b62b-8edd43cd1600)

## Resources referenced while developing this project

- [Fit website background image to screen size : stackoverflow](https://stackoverflow.com/questions/19925075/fit-website-background-image-to-screen-size)
- [What is the easiest way to change the default font in Reactstrap? : stackoverflow](https://stackoverflow.com/questions/52300289/what-is-the-easiest-way-to-change-the-default-font-in-reactstrap)
- [How to unstyle anchor when using bootstrap : stackoverflow](https://stackoverflow.com/questions/22429881/how-to-unstyle-anchor-when-using-bootstrap)
- [Dynamically change color to lighter or darker by percentage CSS : stackoverflow](https://stackoverflow.com/questions/1625681/dynamically-change-color-to-lighter-or-darker-by-percentage-css)


## Things learnt from this challenge

- View height for the single page application is defined by the longest content of all the child components that can possibly appear on that page. I struggled to set the footer at the bottom of the page while not using `fixed-bottom` class - which overlaps the main content when the main content is longer than the view port. I decided to add `min-height: 75vh;` which will make the footer appear at the bottom of the screen even with the large screen, while not leaving too much space between the bottom of the content and the footer in the pages with shorter content. 
- When react pass props to its child component, it puts all the things passed on to the child componet as a single object. When you pass something already being an object to the child component, you use the object at its child component by putting the object name in double carly brases `{{object_name}}` to directly access to its property.
- When the CSS stylesheet is imported as a package, the imported style sheets are listed at the END of the header in HTML, so if you put your custom stylesheet as a link within index.html, it will be overridden by the imported CSS. You can import your custome stylesheet within your JSX file. Add the import of your custom stylesheet AFTER the non-custom stylesheet to ensure your custom stylesheet overrides other stylesheets.

## License

MIT License

Copyright (c) [2023] [Minami Mukai]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
