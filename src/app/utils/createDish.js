import { createElement } from "./createElement"

export function createDish(name, cost, img) {
    const dishCard = createElement('a', ['dish-card'])
    dishCard.href = '#'
    const image = new Image()
    image.src = img
    const textContent = createElement('div',['card_text-content'])
    const dishName = createElement('h3', null, null, name)
    const dishCost = createElement('p', null, null, `${cost} 元`)
    textContent.append(dishName,dishCost)
    dishCard.append(image, textContent)
    return dishCard
}