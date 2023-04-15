export const accordions = () => {
    const accordionTriggers = document.querySelectorAll('.accordion__trigger')
    const accordionContent = document.querySelectorAll('.accordion__content')

    const showAccordionContent = (i = 0) => {
        accordionContent[i].classList.toggle('accordion__content--active')
    }

    accordionTriggers.forEach((trigger, i) => {
        trigger.addEventListener('click', () => {
            showAccordionContent(i)
        })
    })
}