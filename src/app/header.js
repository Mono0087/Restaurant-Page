import { createElement } from "./utils/createElement"

export function loadHeader() {
    const header = createElement('header')
    const h1 = createElement('h1', null, null, 'Restaurant')
    header.append(h1)
    const btnContainer = createElement('div',['buttons-container'])
    const homeBtn = createElement('button', ['header-btn', 'btn', 'btn-active'], 'home-btn', 'Home')
    const menuBtn = createElement('button', ['header-btn', 'btn'], 'menu-btn', 'Menu')
    const infoBtn = createElement('button', ['header-btn', 'btn'], 'info-btn', 'Contact')
    btnContainer.append(homeBtn, menuBtn, infoBtn)
    header.append(btnContainer)
    document.querySelector('#content').append(header)
}

