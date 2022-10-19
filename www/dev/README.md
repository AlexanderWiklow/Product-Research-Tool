
# Product Research Tool Website

![](./images/Screenshot%20from%202022-10-18%2022-37-04.png)

<h1>Welcome! &#x1F44B; </h1>

### The challenge / Description

1. What does this program do?
   - Users should be able to search amongst available data regarding sold products for business and marketing purposes.
   - Sort the data according to different parameters. For example display everyone who bought a TV and a laptop, can we draw conclusions from this data? (place of residence, gender, age group etc?) Conclusions that can be used when planning product campaigns, better target your demographic in online marketing campaigns.

2. Why does this program exist?
    - E-commerce is steadily increasing every year, the competition between companies also increases steadily and gets more and more sophisticated. It is therefore crucial to have good knowledge of your target customers. The more you know about online purchasing behavior on your website the better.

3. Who would benefit from the solution, and in what
context (when) it is relevant.
    - Every business big or small, physical products or software, brick and mortar stores or online benefits from having analytics and statistics readily available. Its a win-win for your customers and your business. I would have used this program as a former e-commerce owner. I used to use different services and sometimes pay monthly fees to use similar (but of course more advanced) services .


### Short summary of this project

This is a project aimed at helping companies in their market research, with the help of this software, it is possible to search amongst previous sell orders and analyze the result. Order history can be sorted by one specific product or combine the search and find every customer who orders a particular number of specified items. The problem i wanted to solve with this project can be summarized into one sentence: "How to sort data in a way that is meaningful in a market research scenario". As a entrepreneur myself having used sell products online for a couple of years i asked myself what kind of information derived from order lists would i find interesting?

---

## Table of contents

- [Product Research Tool Website](#product-research-tool-website)
    - [The challenge / Description](#the-challenge--description)
    - [Short summary of this project](#short-summary-of-this-project)
  - [Table of contents](#table-of-contents)
  - [Install and Quick-start](#install-and-quick-start)
  - [Technical documentation](#technical-documentation)
    - [Built with:](#built-with)
    - [How to use or add this solution to your own project?](#how-to-use-or-add-this-solution-to-your-own-project)
    - [More ways of reusing this code:](#more-ways-of-reusing-this-code)
    - [The code has been coded in a way so it can be easily reused by others:](#the-code-has-been-coded-in-a-way-so-it-can-be-easily-reused-by-others)
    - [Continued development:](#continued-development)
    - [Links](#links)
    - [Reuse this code](#reuse-this-code)
  - [My process](#my-process)
    - [What I learned](#what-i-learned)
    - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)
  - [License](#license)

---

## Install and Quick-start

How to install locally:

- Clone, fork or download this repository as a zip file.
- Open the index.html file in the www/dev folder.
- open terminal, type "npm install" to download the necessary dependencies to run the program
- Step 4: Type "npm start" in the terminal and now the program is up and running!

---

## Technical documentation

### Built with:

- [<img src="https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white">](<[LINK](https://en.wikipedia.org/wiki/HTML5)>)
- [<img src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white
">](<[LINK](https://en.wikipedia.org/wiki/CSS)>)
- [<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
">](<[LINK](https://en.wikipedia.org/wiki/JavaScript)>)
- [<img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
">](<[LINK](https://en.wikipedia.org/wiki/Node.js)>)

---

### How to use or add this solution to your own project? 

This program is not too advanced. The basic code is pretty simple and it would be easy to implement to your own project.

  1. Find this products repository on GitHub, follow this link:
  2. Clone or fork the project:

Fork: 
![](./images/Screenshot%20from%202022-10-18%2023-51-45.png)

Clone: 

![](./images/Screenshot%20from%202022-10-18%2023-56-09.png)

  4. Then, open this project in an editor or your choice, could be Visual Studio Code or something else
  5. Now in the terminal, type: "npm install" followed by "npm start"
  6. npm start will start a local server on localhost:4000. And by now you should be able to see the website and use it as intended. 

### More ways of reusing this code:

   This project is not limited to e-commerce business. It can be used by anyone finding value in comparing data. One example could be an hospital clinic wanting to compare patient data to see what kinds of condition and illnesses might be more common than others, what kind of illnesses might have follow up illnesses or other connections? Is it more common in some demographics like place of residence? age group or gender? or other attributes of lifestyle. This information can be used in research and/or planning ahead when stocking medications or what kind of treatments to focus more on in the future. 

### The code has been coded in a way so it can be easily reused by others: 
  
In the index.html file:

1. Change the descriptive texts
2. Change input checkboxes name and values

In the script.js file: 
  1. Change these to match the corresponding ones on the index.html file: 

```js
const elCheckBoxBtn = document.querySelector("#checkbox-btn");
const elCheckBoxClear = document.querySelector("#checkbox-clear-btn");
```
  2. Make sure this path is correct: 

```js
    fetch('http://localhost:4000/api/content/' + filename)
```
  3. Edit these to match your code
```js
  const elCheckBoxResult = document.querySelector("#checkbox-result");
    let checkboxes = document.getElementsByName('conditions')
```

Thats it! Now you have customized this code to suit your own project!

---

### Continued development: 

 - Future improvements could be the ability to sort the code after more parameters, example find every customer who lives in a certain geographical area that has bought a certain product.
 - Make checkboxes dynamically with JavaScript and attach to the DOM. Create checkboxes for each object property with some kind of loop. 

---

### Links

// TODO:

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

---

### Reuse this code

- Step by step guide to using this code: 
  - After the installation and quick start process. There should be a browser tab opened on localhost:4000 on browser of your choice, google chrome or firefox and similar.
  - step 2: Click on each checkbox that you want included in your search result. You can check as many boxes as you want to get different kinds of result. The program will find and present purchase order that matches all the conditions you have included in the search when you click on the button "Show results:". 
  - "You must check at least one checkbox" will be printed on the screen if no box is selected/checked. 
  - "No result" will be printed if the current database does not have any data that matches the search. 
  - If there is data that corresponds with the checked boxes, a table with information will appear on the lower part of the screen. This table will display a range of information from the customers place of residence, birth year, and other data that can help in market research to draw conclusions from statistics. The table will display every customer that matches the search result. 
  - The button "Clear results" will remove the whole table. Not making the website overcrowded with information and you can go ahead and search for new parameters. 
  
Apply this solution to your own code: 
  - 
- Examples on how the code has been written to enable reuse and who and why someone would like to reuse it:
  - To enable reuse this code has been available to the public through GitHub. 
  - The code is documented and with comments that describe what each functions do. 
  - The code is not specific to a specific platform. 
  - The code is being maintained and supported. 

Ways to reuse this project: 
- To reuse this project, you need to edit the Index.html file so the terminology suits your purpose. This is not difficult it just takes som time, but it is still faster than rebuilding it from scratch. Second, edit the script.js file:
- Opportunistic reuse: 
  - Hospital Clinics could use this software to keep statistics about patients. As artificial technology gets more sophisticated, scripts in the future will be able to make predictions about illnesses based on patients earlier history. 
  - Different uses of this project could be by a Veterinary Clinic, collect and store data to make a statistic database that can be useful when planning on what medication to buy, what kind of treatment to focus on. 
  - Small business owners can use this program to keep track of what kinds of products are being sold, which products are often bought together and therefore should be put on the same shelf in the store for more customers to discover new things?
  -  Basically any business, student or researcher who finds value in having the ability to present and sort data according to different parameters and search queries.  
  -  Software supply chain is documented in the code with comments explaining what happens along the way. 


## My process

My motivation for this project was to become better at JavaScript. JavaScript is a huge part of a web developer career so its important to know how to use it. It is also fun solving these challenges and try to solve problems that arise. 

I choose to build this project because i have an interest in e-commerce, In the past i sold items under my own brand on Amazon. I wrote my bachelor thesis about the development of e-commerce in rural China.

This project simplifies the process of market research. This kind of technology and software is available and comes at a monthly cost from companies that sell this kind of service. 

### What I learned

What i have learned during this process: 
- How to work and manipulate data from JSON files.
- How to get data from external APIs. 
- How "fetch" works with .then. 
- How to get key values and property values from Objects. 
- How to iterate through objects in a meaningful way.
- for... in loops. 
- How to use methods on arrays like "every" and "includes". 
- How to build a table and displaying data with JavaScript and attach it to the DOM. 
- How to use addEventListeners.

---

### Useful resources

- [JavaScript best practices](https://www.w3.org/wiki/JavaScript_best_practices) - This helped me refactor some of my code in line with best practices. I really liked this pattern and will use it going forward.
- [Markdown cheat-sheet](https://www.markdownguide.org/cheat-sheet/) - This is an amazing article which helped me use basic syntax when working with markdown files. I'd recommend it to anyone learning markdown.

---

## Author

- GitHub - [Alexander Wiklöw](https://github.com/AlexanderWiklow)
- LinkedIn - [Alexander Wiklöw](https://www.linkedin.com/in/awikl%C3%B6w/)

---

## Acknowledgments

I would like to thank Peter Karlsson and Kevin Solovjov at Nackademin for helping and guiding me in this project!

---

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)