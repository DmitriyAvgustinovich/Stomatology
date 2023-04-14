export const tabs = () => {
    const tabsTriggersWrapper = document.querySelector('.tabs__triggers')
    const tabsTriggers = document.querySelectorAll('.tabs__triggers-item')
    const tabsContent = document.querySelectorAll('.tab-content')

    const hideTabContent = () => {
        tabsContent.forEach(tab => {
            tab.style.display = 'none'
        })

        tabsTriggers.forEach(activeClass => {
            activeClass.classList.remove('tabs__triggers-item--active')
        })
    }

    const showTabContent = (i = 0) => {
        tabsContent[i].style.display = 'flex'
        tabsTriggers[i].classList.add('tabs__triggers-item--active')
    }

    hideTabContent()
    showTabContent()

    tabsTriggersWrapper.addEventListener('click', (e) => {
        const target = e.target

        if (target && target.classList.contains('tabs__triggers-item')) {
            tabsTriggers.forEach((tab, i) => {
                if (target == tab) {
                    hideTabContent()
                    showTabContent(i)
                }
            })
        }
    })
}