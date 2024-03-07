# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Google Fonts - Bellefair, Barlow Condensed 
- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Desktop-first workflow
- Vanilla Javascript

### What I learned
This challenge helped broaden my understanding of dealing with CSS flexboxes and media queries. Creating an optimisable design for all phone devices as well as tablet devices. 

Reinforced some of my knowledge in of Javascript data and algorithms.

Used this code snippet in dealing with the active page states of the technology sections, modded it to specifically trigger both the parent and child elements. That is the numbers button itself and the number inside.

```js
numberLinks.forEach(link => {
    if (link.href.includes(`${activeTechPage}`)) {
        link.classList.add('active')
        link.parentElement.classList.add('active')
    }
})
```


### Continued development
Since most of the code for each sub-page were identical, I wondered if there's a way to change the 

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [CSS Tricks Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - This helped me in understanding a less streonous way in dividing the contents of each section. 
- [Coding in Public](https://www.youtube.com/watch?v=JkuiKeNS2mg) - This youtube video provided me with a simple method for solving the problem of toggling the active state of each page. I'd recommend it to anyone struggling to understand how to pass this problem.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

