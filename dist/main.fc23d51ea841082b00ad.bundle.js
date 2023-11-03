(()=>{"use strict";var e={};function n(e,n,t,o){let a=document.createElement(e);return n&&a.classList.add(...n),o&&(a.innerText=o),t&&(a.id=t),a}e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var t=e.g.document;if(!n&&t&&(t.currentScript&&(n=t.currentScript.src),!n)){var o=t.getElementsByTagName("script");if(o.length)for(var a=o.length-1;a>-1&&!n;)n=o[a--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})();const t=e.p+"images/restaurant.34584937cc0220de567b.jpg";function o(){const e=document.querySelector("main"),o=n("div",null,"home"),a=n("div",["home_text-container"]),r=n("div",["text-content"]),l=n("h2",null,null,"About us"),c=n("p",null,null,"Welcome to our restaurant, where every meal becomes an unforgettable culinary journey. We take pride in offering a wide selection of dishes inspired by both classic recipes and modern gastronomic trends."),i=n("p",null,null,"Here, you'll savor skillfully prepared food, where each ingredient is carefully chosen to achieve the perfect balance of flavors. Our team of talented chefs pays attention to every detail to ensure that each dish brings you genuine pleasure."),u=new Image;u.src=t,r.append(l,c,i),a.append(r),o.append(u,a),e.append(o)}const a=e.p+"images/bliny.9118817f05df612c09c6.jpg",r=e.p+"images/borsht.f7d622e78ea759a52f38.jpg",l=e.p+"images/salad.9d14b16d89e83ea36e6c.jpg";!function(){const e=n("header"),t=n("h1",null,null,"Restaurant");e.append(t);const o=n("div",["buttons-container"]),a=n("button",["header-btn","btn"],"home-btn","Home"),r=n("button",["header-btn","btn"],"menu-btn","Menu"),l=n("button",["header-btn","btn"],"info-btn","Contact");o.append(a,r,l),e.append(o),document.querySelector("#content").append(e)}();const c=n("main"),i=document.querySelector(".buttons-container");document.querySelector("#content").append(c),o(),i.addEventListener("click",(function(e){if("BUTTON"===e.target.nodeName)switch(e.target.id){case"info-btn":c.innerHTML="",function(){const e=document.querySelector("main"),t=n("div",null,"contact-info"),o=n("h2",null,null,"Contact Info"),a=n("div",null,"info_container"),r=n("div",null,"phone-info"),l=n("h3",null,null,"Phone:"),c=n("a",null,null,"+7 (123) 456-7890");c.href="tel:+7123456-7890",r.append(l,c);const i=n("div",null,"address-info"),u=n("h3",null,null,"Address:"),s=n("a",null,null,"Ул. Московская, 1234, Мытищи, Россия");s.href="https://www.google.com/maps/@61.1092459,28.5712777,5.9z?entry=ttu",i.append(u,s);const d=n("div",null,"email-info"),p=n("h3",null,null,"email:"),m=n("a",null,null,"info@gastro-corner.com");m.href="mailto: info@gastro-corner.com",d.append(p,m),a.append(r,i,d),t.append(o,a),e.append(t)}();break;case"menu-btn":c.innerHTML="",function(){const e=document.querySelector("main"),t=n("div",null,"menu"),o=n("h2",null,null,"Menu"),c=n("div",null,"dishes-container");[{name:"Bliny",cost:100,img:a},{name:"Borsht",cost:200,img:r},{name:"Salad",cost:200,img:l}].forEach((e=>{c.append(function(e,t,o){const a=n("a",["dish-card"]);a.href="#";const r=new Image;r.src=o;const l=n("div",["card_text-content"]),c=n("h3",null,null,e),i=n("p",null,null,`${t} 元`);return l.append(c,i),a.append(r,l),a}(e.name,e.cost,e.img))})),t.append(o,c),e.append(t)}();break;case"home-btn":c.innerHTML="",o()}}))})();