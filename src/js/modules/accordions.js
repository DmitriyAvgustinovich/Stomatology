export const accordions = () => {
    const accordions = document.querySelectorAll('.accordion__wrapper')

    accordions.forEach((accordion) => {
        const trigger = accordion.querySelector('.accordion__trigger')

        trigger.addEventListener('click', () => {
            accordion.classList.toggle('open')

            const description = accordion.querySelector('.accordion__description')
            description.style.height = accordion.classList.contains('open') ?
                `${description.scrollHeight}px` : '0'
        })
    })
}