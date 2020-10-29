let links = [
    {
        label: "Home",
        url: "#home"
    },
    {
        label: "Portfolio",
        url: "#portfolio"
    },
    {
        label: "About",
        url: "#about"
    },
    {
        label: "Contact",
        url: "#contact"
    },
];

// create the ul element
let mainNavElement = document.createElement('ul');

// give the id "main-nav" to the ul element
mainNavElement.id = "main-nav";


for (let i = 0; i < links.length; i++) {
    // create a "li" element
    let liElement = document.createElement('li');
    // create a "a" element
    let aElement = document.createElement('a');
    // set the "href" of the "a" element to the "url" from the "links" array 
    aElement.href = links[i].url;
    // set the textContent of the "a" element to the "label" from the "links" array 
    aElement.textContent = links[i].label;
    // append the "a" element to the "li" element
    liElement.appendChild(aElement);
    // append the "li" element to the "ul" element
    mainNavElement.appendChild(liElement);
}

// append the "ul" element to the body
document.body.appendChild(mainNavElement);
