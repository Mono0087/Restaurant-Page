(()=>{"use strict";function n(n,t,e,o){let u=document.createElement(n);return t&&u.classList.add(...t),o&&(u.innerText=o),e&&(u.id=e),u}!function(){const t=n("header"),e=n("h1",null,null,"Restaurant");t.append(e);const o=n("div",["buttons-container"]),u=n("button",["header-btn","btn"],"home-btn","Home"),a=n("button",["header-btn","btn"],"menu-btn","Menu"),d=n("button",["header-btn","btn"],"info-btn","Contact");o.append(u,a,d),t.append(o),document.querySelector("#content").append(t)}()})();