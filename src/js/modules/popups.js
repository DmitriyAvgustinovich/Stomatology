export const popup = () => {
    const bindModal = (openPopup, closePopup, contentPopup) => {
        const popupOpen = document.querySelector(openPopup)
        const popupClose = document.querySelectorAll(closePopup)
        const popupContent = document.querySelector(contentPopup)
        const overlay = document.querySelector('.overlay')

        const openModal = () => {
            popupContent.style.display = 'block'
            overlay.style.display = 'block'
            document.body.classList.add('popup--open')
        }

        const closeModal = () => {
            popupContent.style.display = 'none'
            overlay.style.display = 'none'
            document.body.classList.remove('popup--open')
        }

        document.addEventListener('keydown', (key) => {
            if (key.code === 'Escape') {
                closeModal()
            }
        })

        popupOpen.addEventListener('click', () => {
            openModal()
        })

        popupClose.forEach(btn => {
            btn.addEventListener('click', () => {
                closeModal()
            })
        })

        overlay.addEventListener('click', () => {
            closeModal()
        })
    }
    bindModal('.sign__btn', '.popup-close', '.popup-send-form',)
    bindModal('.video-about__btn', '.popup-close', '.popup-video-about')
}