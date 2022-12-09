# Frontend Mentor - Shortly URL shortening API Challenge solution

This is a solution to the [Shortly URL shortening API Challenge challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Shorten any valid URL
- Copy the shortened link to their clipboard in a single click
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty

### Screenshot

![](./screenshots/active.gif)


### Links

- Solution URL: [Add solution URL here](https://github.com/awsmPuff/url-shortening-landing-page)
- Live Site URL: [Add live site URL here](https://awsmpuff.github.io/url-shortening-landing-page/)

## My process

### Built with

- Semantic HTML5 markup
- SCSS
- Flexbox
- Mobile-first workflow


### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```js

// Copy texts to clipbord
 results.childNodes.forEach(child => {
                const copyBtn = child.lastElementChild
                copyBtn.addEventListener('click', () => {
                    //get link content
                    let urlText = child.childNodes[5].textContent
                    console.log(urlText);
                    navigator.clipboard.writeText(urlText)
                    copyBtn.innerHTML = 'Copied!'
                    copyBtn.style.backgroundColor = 'hsl(257, 27%, 26%)'
                    setTimeout(() => {
                        copyBtn.innerHTML = 'copy'
                        copyBtn.style.backgroundColor = 'hsl(180, 66%, 49%)'
                    }, 1200);
                })
                
});
```


### Useful resources

- [shrtcode API](https://app.shrtco.de/) - Shorten any valid URL.


## Author

- Website - [Wanxia Xie/Laurenxx](https://www.your-site.com)
- Frontend Mentor - [@awsmPuff](https://www.frontendmentor.io/profile/awsmPuff)
