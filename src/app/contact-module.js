import { createElement } from "./utils/createElement"

export function loadContactModule() {
    const main = document.querySelector('main')
    const contactInfo = createElement('div', null, 'contact-info')
    const h2 = createElement('h2', null, null, 'Contact Info')
    const infoContainer = createElement('div', null, 'info_container')

    const phoneInfo = createElement('div', null, 'phone-info')
    const h3Phone = createElement('h3', null, null, 'Phone:')
    const phone = createElement('a', null, null, '+7 (123) 456-7890')
    phone.href = 'tel:+7123456-7890'
    phoneInfo.append(h3Phone, phone)

    const addressInfo = createElement('div', null, 'address-info')
    const h3Address = createElement('h3', null, null, 'Address:')
    const address = createElement('a', null, null, 'Ул. Московская, 1234, Мытищи, Россия')
    address.href = 'https://www.google.com/maps/@61.1092459,28.5712777,5.9z?entry=ttu'
    addressInfo.append(h3Address, address)

    const emailInfo = createElement('div', null, 'email-info')
    const h3email = createElement('h3', null, null, 'Email:')
    const email = createElement('a', null, null, 'info@gastro-corner.com')
    email.href = 'mailto: info@gastro-corner.com'
    emailInfo.append(h3email, email)

    infoContainer.append(phoneInfo, addressInfo, emailInfo)
    contactInfo.append(h2, infoContainer)
    main.append(contactInfo)
}