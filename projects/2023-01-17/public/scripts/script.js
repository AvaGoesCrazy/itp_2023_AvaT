// Get a reference to the object representing the BODY element so we can append stuff to it.
const body = document.querySelector('body');

// Create a new H1 element.
const q1 = document.createElement('h1');
const q2 = document.createElement('h1');
const q3 = document.createElement('h1');

// Create a new P element.
const a1 = document.createElement('p');
const a2 = document.createElement('p');
const a3 = document.createElement('p');

// Create a text node and add it to the H1
q1.append(document.createTextNode('Can you tell me why HTML was developed?'));

q2.append(document.createTextNode(`What about using HTML for GUIs?`));

q3.append(document.createTextNode(`What are some of the main elements of HTML?`));

// Create a text node and add it to the P element. Note the use of `` rather
// than '' which allows us to break the string across lines.
a1.append(
  document.createTextNode(`
 HTML (Hypertext Markup Language) was developed to create a standard way to
 create and structure documents on the World Wide Web. It allows developers to
 create structured documents, including headings, paragraphs, images and links,
 that can be displayed in a web browser. It was created to simplify the process
 of creating and sharing documents online, so that anyone can create and view
 web pages with a consistent look and feel.
`),
);


a2.append(
  document.createTextNode(`
 HTML can be used to create user interfaces for web applications, but it is 
 primarily designed as a markup language for creating structured documents 
 to be displayed in web browsers. While it can be used to create basic user 
 interfaces, it is not typically considered a good choice for creating complex, 
 interactive user interfaces. Other technologies such as JavaScript and CSS are 
 typically used in conjunction with HTML to create more advanced user interfaces 
 for web applications. Additionally, there are other technologies such as 
 Electron, React Native and NativeScript that allow to create cross-platform 
 desktop and mobile apps using web technologies such as HTML, CSS, and JavaScript.
`),
);

a3.append(
  document.createTextNode(`
 Some of the main elements of HTML include
`),
);

// Add the new P element to the body.
// Add the new H1 element to the body.
body.append(q1);

body.append(a1);

body.append(q2);

body.append(a2);

body.append(q3);

body.append(a3);
