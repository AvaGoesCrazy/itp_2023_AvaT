const cel = (tag, txt) =>{
  const e = document.createElement(tag);
  e.append(document.createTextNode(txt));
  return e;
}

const body = document.querySelector('body');

body.append(
cel('h1', 'Can you tell me why HTML was developed?')
);

body.append(
  cel('p', 'Can you tell me why HTML was developed?')
  );
  

//const q1 = document.createElement('h1');
//const q2 = document.createElement('h1');
//const q3 = document.createElement('h1');
//const q4 = document.createElement('h1');
//
//// Create a new P element.
//const a1 = document.createElement('p');
//const a2 = document.createElement('p');
//const a3 = document.createElement('p');
//const a4 = document.createElement('p');
//const a5 = document.createElement('p');
//
//const list = document.createElement('ol');
//
//const le1 = document.createElement('li');
//const le2 = document.createElement('li');
//const le3 = document.createElement('li');
//const le4 = document.createElement('li');
//const le5 = document.createElement('li');
//const le6 = document.createElement('li');
//const le7 = document.createElement('li');
//const le8 = document.createElement('li');
//const le9 = document.createElement('li');
//const le0 = document.createElement('li');
//
//const code1 = document.createElement('code');
//const code2 = document.createElement('code');
//const code3 = document.createElement('code');
//const code4 = document.createElement('code');
//const code5 = document.createElement('code');
//const code6 = document.createElement('code');
//const code7 = document.createElement('code');
//const code8 = document.createElement('code');
//const code9 = document.createElement('code');
//const code0 = document.createElement('code');
//
//const code11 = document.createElement('code');
//
//const image = document.createElement('img')
//
//const chat = document.createElement('a')
//const flickr = document.createElement('a')
//const cc = document.createElement('a')
//const txt1 = document.createElement('a')
//const txt2 = document.createElement('a')
//const txt3 = document.createElement('a')
//
//const creds = document.createElement('credits')
//
//// Create a text node and add it to the H1
//
//chat.setAttribute('href', 'https://chat.openai.com/chat')
//chat.append(document.createTextNode('ChatGPT'))
//
//flickr.setAttribute('href', 'https://www.flickr.com/photos/itupictures/16662336315')
//flickr.append(document.createTextNode('flickr'))
//
//cc.setAttribute('href', 'https://creativecommons.org/licenses/by/2.0/')
//cc.append(document.createTextNode('CC BY 2.0'))
//
//txt1.append(document.createTextNode('Text from 2023-01-14 conversation with '))
//txt2.append(document.createTextNode('Photo of a young Tim Berners-Lee from '))
//txt3.append(document.createTextNode(' no thanks to ChatGPT. '))
//
//creds.append(txt1, chat, txt2, flickr, txt3, cc)
//
//image.setAttribute('src', '/images/tim-berners-lee.jpg', 'alt="A young Tim Berner-Lee"')
//
//q1.append(document.createTextNode('Can you tell me why HTML was developed?'));
//
//q2.append(document.createTextNode(`What about using HTML for GUIs?`));
//
//q3.append(document.createTextNode(`What are some of the main elements of HTML?`));
//
//q4.append(document.createTextNode(`Can you find a picture of the inventor of the web?`));
//
//// Create a text node and add it to the P element. Note the use of `` rather
//// than '' which allows us to break the string across lines.
//a1.append(
//  document.createTextNode(`
// HTML (Hypertext Markup Language) was developed to create a standard way to
// create and structure documents on the World Wide Web. It allows developers to
// create structured documents, including headings, paragraphs, images and links,
// that can be displayed in a web browser. It was created to simplify the process
// of creating and sharing documents online, so that anyone can create and view
// web pages with a consistent look and feel.
//`),
//);
//
//a2.append(
//  document.createTextNode(`
// HTML can be used to create user interfaces for web applications, but it is 
// primarily designed as a markup language for creating structured documents 
// to be displayed in web browsers. While it can be used to create basic user 
// interfaces, it is not typically considered a good choice for creating complex, 
// interactive user interfaces. Other technologies such as JavaScript and CSS are 
// typically used in conjunction with HTML to create more advanced user interfaces 
// for web applications. Additionally, there are other technologies such as 
// Electron, React Native and NativeScript that allow to create cross-platform 
// desktop and mobile apps using web technologies such as HTML, CSS, and JavaScript.
//`),
//);
//
//a3.append(
//  document.createTextNode(`
// Some of the main elements of HTML include:
//`),
//);
//
//a4.append(
//  document.createTextNode(`
// These are some of the main elements, but there are many more available, like 
//`),
//);
//
//a5.append(
//  document.createTextNode(`
//  I'm sorry, I am a text based model and I am not able to find or show images. 
//  However, I can tell you that the inventor of the World Wide Web (WWW) is Sir 
//  Tim Berners-Lee. He is a British computer scientist and is considered to be 
//  the inventor of the World Wide Web. He proposed and developed the first 
//  successful communication between a Hypertext Transfer Protocol (HTTP) client 
//  and server via the Internet in 1989. He also created the first web browser, 
//  called WorldWideWeb, and the first web server, called httpd. He also wrote 
//  the first version of the HTML language, which provided the structure for 
//  web pages. He is currently working on a decentralized web project called Solid.
//`),
//);
//
////adding in the proper semicolins would take like 7 bajillion years i do not wanna do that its 3:26 i gottta make a PR before class is over.
//code11.append(document.createTextNode(`<header>, <nav>, <main>, <footer>, <form>, <input>, <select>,`))
//a4.append(code11);
//a4.append(document.createTextNode(` etc.`))
//
//code1.append(document.createTextNode(`<html>`));
//code2.append(document.createTextNode(`<head>`));
//code3.append(document.createTextNode(`<body>`));
//code4.append(document.createTextNode(`<h1> to <h6>`));
//code5.append(document.createTextNode(`<p>`));
//code6.append(document.createTextNode(`<a>`));
//code7.append(document.createTextNode(`<img>`));
//code8.append(document.createTextNode(`<ul> and <ol>`));
//code9.append(document.createTextNode(`<li>`));
//code0.append(document.createTextNode(`<div> and <span>`));
//
//le1.append(code1);
//le2.append(code2);
//le3.append(code3);
//le4.append(code4);
//le5.append(code5);
//le6.append(code6);
//le7.append(code7);
//le8.append(code8);
//le9.append(code9);
//le0.append(code0);
//
//le1.append(document.createTextNode(`: This is the root element of an HTML document, and it contains all of the other elements.`),);
//le2.append(document.createTextNode(`: This element contains information about the document, such as the title of the page, which is displayed in the browser's title bar or tab.`),);
//le3.append(document.createTextNode(`: This element contains the content of the document that is displayed in the browser window.`),);
//le4.append(document.createTextNode(`: These elements are used for headings and subheadings. <h1> is the highest level heading, while <h6> is the lowest.`),);
//le5.append(document.createTextNode(`: This element is used for paragraphs of text.`),);
//le6.append(document.createTextNode(`: This element is used for hyperlinks, which allow users to navigate between pages on the web.`),);
//le7.append(document.createTextNode(`: This element is used to embed images in a web page.`),);
//le8.append(document.createTextNode(`: These elements are used for unordered and ordered lists, respectively.`),);
//le9.append(document.createTextNode(`: This element is used for list items.`),);
//le0.append(document.createTextNode(`: These elements are used for grouping and applying styles to elements on a web page.`),);
//
//list.append(le1, le2, le3, le4, le5, le6, le7, le8, le9, le0);
//
//// Add the new P element to the body.
//// Add the new H1 element to the body.
//body.append(q1, a1, q2, a2, q3, a3, list, a4, q4, image, a5, creds);