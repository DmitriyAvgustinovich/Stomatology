export const menu = () => {
    const bindMenu = (openAdaptMenu, closeAdaptMenu, adaptMenuContent) => {
        const openMenu = document.querySelector(openAdaptMenu)
        const closeMenu = document.querySelector(closeAdaptMenu)
        const contentMenu = document.querySelector(adaptMenuContent)

        const menuOpen = () => {
            contentMenu.style.display = 'block'
        }

        const menuClose = () => {
            contentMenu.style.display = 'none'
        }

        openMenu.addEventListener('click', (e) => {
            e.preventDefault()
            menuOpen()
        })

        closeMenu.addEventListener('click', (e) => {
            e.preventDefault()
            menuClose()
        })

        window.addEventListener('resize', () => {
            if (window.innerWidth > 715) {
                menuClose()
            }
        });
    }

    bindMenu('.adapt-menu__trigger', '.adapt-menu__trigger--close', '.adapt-menu')

    const activeLinkWrapper = document.querySelector('.navbar__list')
    const activeLink = document.querySelectorAll('.navbar__list-item')

    const addActiveClass = (i = 0) => {
        activeLink[i].classList.add('navbar__list-item--active')
    }

    const deleteActiveClass = () => {
        activeLink.forEach(e => {
            e.classList.remove('navbar__list-item--active')
        })
    }

    deleteActiveClass()
    addActiveClass()

    activeLinkWrapper.addEventListener('click', (e) => {
        const target = e.target

        activeLink.forEach((link, i) => {
            if (target == link) {
                deleteActiveClass()
                addActiveClass(i)
            }
        })
    })
}