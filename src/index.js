import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

const siteContent = {
  nav: {
    "nav-item-1": "Home",
    "nav-item-2": "Images",
    "nav-item-3": "Headlines",
    "nav-item-4": "Techport",
    "nav-item-5": "Nasa",
    "nav-item-6": "Website",
    "img-src": "img/logo.png"
  },
  cta: {
    "main-content": {
      "Home-h4": "Home",
      "Home-content":
        "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
      "Images-h4": "Images",
      "Images-content":
        "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
      "middle-img-src": "img/mid-page-accent.jpg",
      "Headlines-h4": "Headlines",
      "Headlines-content":
        "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
      "Tech-h4": "Tech",
      "product-content":
        "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
      "Nasa-h4": "Nasa",
      "Nasa-content":
        "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
    },
    website: {
      "website-h4": "website",
      Website: "Nasa.gov"
    },
    footer: {
      copyright: "Copyright NASA! 2019"
    }
  }
};
