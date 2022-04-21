let b = document.createElement("script");
b.type = "text/javascript";
const newContent = document.createTextNode("HSTORYBLOK_PREVIEW_URL = 'http://localhost:3000/'");
b.appendChild(newContent);
document.body.appendChild(b);

let s = document.createElement("script");
s.type = "text/javascript";
s.src = "https://app.storyblok.com/f/app-latest.js";
document.body.appendChild(s);
