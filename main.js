// your javascript file
const container = document.querySelector('#container');

/* example of creating and appending a DOM element to a webpage. */

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

/* a <p> with red text that says “Hey I’m red!” */

const red = document.createElement('p');
red.textContent = "Hey I'm red!";
red.style.color = 'red';                                      

container.appendChild(red);

/* an <h3> with blue text that says “I’m a blue h3!” */

const blue = document.createElement('h3');
blue.textContent = "I'm a blue h3!";
blue.style.color = 'blue';                                      

container.appendChild(blue);

/* a <div> with a black border and pink background color with the following elements inside of it:
another <h1> that says “I’m in a div”
a <p> that says “ME TOO!”
Hint for this one: after creating the div with createElement, append the <h1> and <p> to it before adding it to the container.
*/

const thediv = document.createElement('div');
const insidediv = document.createElement('h1');
const insidep = document.createElement('p');


thediv.style.cssText = 'border: 1px solid black; background: pink';  
insidediv.textContent = "I'm in a div";
insidep.textContent = "ME TOO!";

thediv.appendChild(insidediv);
thediv.appendChild(insidep);

container.appendChild(thediv);


/*----------- end of exercise 1 -----------*/

const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");


const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
  alert("Hello World");
});