/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronouns = [
  "the",
  "our",
  "my",
  "your",
  "their",
  "his",
  "her",
  "its",
  "this",
  "that"
];

let adjectives = [
  "great",
  "big",
  "fast",
  "smart",
  "funny",
  "bold",
  "wild",
  "tiny",
  "bright",
  "strong"
];

let nouns = [
  "tiger",
  "rocket",
  "cloud",
  "mountain",
  "eagle",
  "river",
  "hero",
  "dream",
  "coder",
  "lion"
];

let extensions = [".com", ".net", ".org", ".io", ".es", ".info"];

function getDomainName(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function domainName() {
  let item1 = getDomainName(pronouns);
  let item2 = getDomainName(adjectives);
  let item3 = getDomainName(nouns);
  let item4 = getDomainName(extensions);
  let domainName = item1 + item2 + item3 + item4;
  document.getElementById("domainName").innerHTML = domainName;
}

console.log(domainName());

window.onload = function() {
  domainName();
};
