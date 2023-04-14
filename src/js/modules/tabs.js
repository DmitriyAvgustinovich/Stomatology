export const tabs = () => {
    const tabsTriggersWrapper = document.querySelector('.tabs__triggers')
    const tabsTriggers = document.querySelectorAll('.tabs__trigger')
    const tabsContent = document.querySelectorAll('.tabs__content')

    const hideTabContent = () => {
        tabsContent.forEach(tab => {
            tab.style.display = 'none'
        })

        tabsTriggers.forEach(activeClass => {
            activeClass.classList.remove('tabs__trigger--active')
        })
    }

    const showTabContent = (i = 0) => {
        tabsContent[i].style.display = 'flex'
        tabsTriggers[i].classList.add('tabs__trigger--active')
    }

    hideTabContent()
    showTabContent()

    tabsTriggersWrapper.addEventListener('click', (e) => {
        const target = e.target

        tabsTriggers.forEach((tab, i) => {
            if (target == tab) {
                hideTabContent()
                showTabContent(i)
            }
        })
    })
}