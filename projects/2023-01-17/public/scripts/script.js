
const cel = (tag, txt) =>{
  const e = document.createElement(tag);
  e.append(document.createTextNode(txt));
  return e;
};

const pAndC = (txt1, txt2) =>{
  const pTxt = document.createElement('p');
  const cTxt = document.createElement('code');
  cTxt.append(document.createTextNode(txt2));
  pTxt.append(document.createTextNode(txt1));
  pTxt.append(cTxt);
  return pTxt;
}

const list = document.createElement('ol');

const lstElm = (code, regTxt) =>{
  const codeElm = document.createElement('code');
  const le = document.createElement('li');
  codeElm.append(document.createTextNode(code));
  le.append(codeElm);
  le.append(regTxt);
  list.append(le);
  return list
};

//make an image 
//argument 1: '/images/example.png'
//argument 2: 'alt="[no brackets, image description here]"'

const makeImg = (src, txt) =>{
  const image = document.createElement('img');
  image.setAttribute('src', src);
  image.setAttribute('alt', txt);
  return image;
};

const linkP = (t1, l1, att1, t2, l2, att2, t3, l3, att3) =>{

  const txt1 = document.createElement('a');
  const txt2 = document.createElement('a');
  const txt3 = document.createElement('a');

  const link1 = document.createElement('a');
  const link2 = document.createElement('a');
  const link3 = document.createElement('a');

  const links = document.createElement('credits');

  link1.setAttribute('href', att1);
  link2.setAttribute('href', att2);
  link3.setAttribute('href', att3);

  link1.append(document.createTextNode(l1));
  link2.append(document.createTextNode(l2));
  link3.append(document.createTextNode(l3));

  txt1.append(t1);
  txt2.append(t2);
  txt3.append(t3);

  links.append(txt1, link1, txt2, link2, txt3, link3);
  return links;
}

const body = document.querySelector('body');

body.append(
  cel(
    'h1', 'Can you tell me why HTML was developed?'
  ),
  cel(
    'p', `HTML (Hypertext Markup Language) was developed 
    to create a standard way to create and structure documents 
    on the World Wide Web. It allows developers to create 
    structured documents, including headings, paragraphs, 
    images and links, that can be displayed in a web browser. 
    It was created to simplify the process of creating and 
    sharing documents online, so that anyone can create and 
    view web pages with a consistent look and feel.`
  ),
  cel(
    'h1', 'What about using HTML for GUIs?'
  ),
  cel(
    'p', `HTML can be used to create user interfaces for web 
    applications, but it is primarily designed as a markup 
    language for creating structured documents to be displayed 
    in web browsers. While it can be used to create basic user 
    interfaces, it is not typically considered a good choice 
    for creating complex, interactive user interfaces. Other 
    technologies such as JavaScript and CSS are typically used 
    in conjunction with HTML to create more advanced user 
    interfaces for web applications. Additionally, there are 
    other technologies such as Electron, React Native and 
    NativeScript that allow to create cross-platform desktop 
    and mobile apps using web technologies such as HTML, CSS, 
    and JavaScript.`
  ),
  cel(
    'h1', 'What are some of the main elements of HTML?'
  ),
  cel(
    'p', `Some of the main elements of HTML include:`
  ),
  lstElm(
    '<html>', `: This is the root element of an HTML document, and it contains all of the other elements.`
  ),
  lstElm(
    '<head>', `: This element contains information about the 
    document, such as the title of the page, which is displayed 
    in the browser's title bar or tab.`
  ),
  lstElm(
    '<body>', `: This element contains the content of the document 
    that is displayed in the browser window.`
  ),
  lstElm(
    '<h1> to <h6>', `: These elements are used for headings and 
    subheadings. <h1> is the highest level heading, while <h6> is 
    the lowest.`
  ),
  lstElm(
    '<p>', `: This element is used for paragraphs of text.`
  ),
  lstElm(
    '<a>', `: This element is used for hyperlinks, which allow 
    users to navigate between pages on the web.`
  ),
  lstElm(
    '<img>', `: This element is used to embed images in a web page.`
  ),
  lstElm(
    '<ul> and <ol>', `: These elements are used for unordered and 
    ordered lists, respectively.`
  ),
  lstElm(
    '<li>', `: This element is used for list items.`
  ),
  lstElm(
    '<div> and <span>', `: These elements are used for grouping and 
    applying styles to elements on a web page.`
  ),
  pAndC(
    `These are some of the main elements, but there are many more 
    available, like `, `<header>, <nav>, <main>, <footer>, <form>, 
    <input>, <select>, etc.`
  ),
  cel(
    'h1', `Can you find a picture of the inventor of the web?`
  ),
  makeImg(
    '/images/tim-berners-lee.jpg', 'A young Tim Berner-Lee'
  ),
  cel(
    'p', `I'm sorry, I am a text based model and I am not able 
    to find or show images. However, I can tell you that the 
    inventor of the World Wide Web (WWW) is Sir Tim 
    Berners-Lee. He is a British computer scientist and is 
    considered to be the inventor of the World Wide Web. He 
    proposed and developed the first successful communication 
    between a Hypertext Transfer Protocol (HTTP) client and 
    server via the Internet in 1989. He also created the first 
    web browser, called WorldWideWeb, and the first web server, 
    called httpd. He also wrote the first version of the HTML 
    language, which provided the structure for web pages. He 
    is currently working on a decentralized web project called 
    Solid.`
  ),
  linkP(
    'Text from 2023-01-14 conversation with ',
    'ChatGPT',
    'https://chat.openai.com/chat',
    ' Photo of a young Tim Berners-Lee from ',
    'flickr',
    'https://www.flickr.com/photos/itupictures/16662336315',
    ' no thanks to ChatGPT. ',
    '(CC BY 2.0).',
    'https://creativecommons.org/licenses/by/2.0/'
  )
);


//USE THIS TO ADD A LIST ELEMENT
//lstElm('', ``);


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
//
//body.append(q1, a1, q2, a2, q3, a3, list, a4, q4, image, a5, creds);