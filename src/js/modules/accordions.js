export const accordions = () => {
    const accordionWrapper = document.querySelectorAll('.accordion__wrapper')

    accordionWrapper.forEach((item) => {
        const accordionTrigger = item.querySelector('.accordion__trigger')

        accordionTrigger.addEventListener('click', () => {
            item.classList.toggle('open')

            const accordionDescription = item.querySelector('.accordion__description')
            if (item.classList.contains('open')) {
                accordionDescription.style.height = `${accordionDescription.scrollHeight}px`
            } else {
                accordionDescription.style.height = '0px'
            }
        })
    })
}