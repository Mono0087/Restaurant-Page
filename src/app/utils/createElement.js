export function createElement(name, classList, id, textContent) {
    let el = document.createElement(name)
    classList ? el.classList.add(...classList) : null
    textContent ? el.innerText = textContent : null
    id ? el.id = id : null
    return el
}