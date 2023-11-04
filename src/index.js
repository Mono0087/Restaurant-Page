import { createElement } from "./app/utils/createElement"

import { loadHeader } from "./app/header"
import { loadHomeModule } from "./app/home-module"
import { loadMenuModule } from "./app/menu-module"
import { loadContactModule } from "./app/contact-module"
import "./SCSS/style.scss"

loadHeader()
const content = document.querySelector('#content')
const main = createElement('main')
const headerBtns = content.querySelector('.buttons-container')
content.append(main)
loadHomeModule()

headerBtns.addEventListener('click', btnsHandler)
function btnsHandler(e) {
    if (e.target.nodeName === 'BUTTON') {
        let btnId = e.target.id
        if (!e.target.classList.contains('btn-active')) {
            [...headerBtns.children].forEach(child => {
                child.classList.remove('btn-active')
            })
            e.target.classList.add('btn-active')
        }
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