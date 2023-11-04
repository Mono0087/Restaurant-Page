import { createElement } from "./utils/createElement"

import { loadHeader } from "./header"
import { loadHomeModule } from "./home-module"
import { loadMenuModule } from "./menu-module"
import { loadContactModule } from "./contact-module"
import "../SCSS/style.scss"


export function initApp() {
    const content = document.querySelector('#content')
    const main = createElement('main')

    loadHeader()
    content.append(main)
    loadHomeModule()

    const headerBtns = content.querySelector('.buttons-container')
    headerBtns.addEventListener('click', btnsHandler)
    function btnsHandler(e) {
        if (e.target.nodeName === 'BUTTON') {
            let btnId = e.target.id
            setActiveBtn(e.target)
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
}

function setActiveBtn(btn) {
    const headerBtns = document.querySelector('.buttons-container')
    if (!btn.classList.contains('btn-active')) {
        [...headerBtns.children].forEach(child => {
            child.classList.remove('btn-active')
        })
        btn.classList.add('btn-active')
    }
}