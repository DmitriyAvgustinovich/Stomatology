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
}