// ---> Show content tab in Bevrages section
function showContent(btnTag) {
    let lastBtnTag = btnTag.parentNode.previousElementSibling.childNodes[1]
    lastBtnTag.className = "nav-link text-primary"
    btnTag.className = "nav-link bg-primary text-secondary active"
    let cardBodyElement = btnTag.parentNode.parentNode.parentNode.nextElementSibling;
    cardBodyElement.style.display = "none"
    cardBodyElement.nextElementSibling.style.display = "block"
}

// ---> Show beverage tab in Bevrages section
function showBeverage(btnTag) {
    let nextBtnTag = btnTag.parentNode.nextElementSibling.childNodes[1]
    nextBtnTag.className = "nav-link text-primary"
    btnTag.className = "nav-link bg-primary text-secondary active"
    let cardBodyElement = btnTag.parentNode.parentNode.parentNode.nextElementSibling;
    cardBodyElement.style.display = "block"
    cardBodyElement.nextElementSibling.style.display = "none"
}

// ---> Enable bootstrap tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))