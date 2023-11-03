import { createElement } from "./app/utils/createElement"

import { loadHeader } from "./app/header"
import { loadHomeModule } from "./app/home-module"
import { loadMenuModule } from "./app/menu-module"
import { loadContactModule } from "./app/contact-module"
import "./SCSS/style.scss"

loadHeader()
const main = createElement('main')
const headerBtns = document.querySelector('.buttons-container')
document.querySelector('#content').append(main)
loadHomeModule()

headerBtns.addEventListener('click', btnsHandler)
function btnsHandler(e) {
    if (e.target.nodeName === 'BUTTON') {
        let btnId = e.target.id
        switch (btnId) {
            case 'info-btn':
                main.innerHTML = ''
                loadContactModule()
                break;
            case 'menu-btn':
                main.innerHTML = ''
                loadMenuModule()
                break;
            case 'home-btn':
                main.innerHTML = ''
                loadHomeModule()
            default:
                break;
        }
    }
}