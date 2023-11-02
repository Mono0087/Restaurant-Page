import { createElement } from "./utils/createElement"
import img1 from "../assets/img/restaurant.jpg"

export function loadHomeModule() {
    const main = document.querySelector('main')
    const home = createElement('div', null, 'home')
    const textContainer = createElement('div', ['home_text-container'])
    const textContent = createElement('div', ['text-content'])
    const h2 = createElement('h2', null, null, 'About us')
    const para1 = createElement('p', null, null, 'Welcome to our restaurant, where every meal becomes an unforgettable culinary journey. We take pride in offering a wide selection of dishes inspired by both classic recipes and modern gastronomic trends.')
    const para2 = createElement('p', null, null, "Here, you'll savor skillfully prepared food, where each ingredient is carefully chosen to achieve the perfect balance of flavors. Our team of talented chefs pays attention to every detail to ensure that each dish brings you genuine pleasure.")
    const imgEl = new Image()
    imgEl.src = img1
    textContent.append(h2, para1, para2)
    textContainer.append(textContent)
    home.append(imgEl, textContainer)
    main.append(home)
}