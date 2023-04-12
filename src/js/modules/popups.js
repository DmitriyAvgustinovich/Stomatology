export const popup = () => {

    const bindModal = (openPopup, closePopup, contentPopup) => {

        const popupOpen = document.querySelector(openPopup)
        const popupClose = document.querySelectorAll(closePopup)
        const popupContent = document.querySelector(contentPopup)
        const popupOverlay = document.querySelector('.modal-overlay')

        const openModal = () => {
            popupContent.style.display = 'block'
            popupOverlay.style.display = 'block'
            document.body.classList.add('popup--open')
        }

        const closeModal = () => {
            popupContent.style.display = 'none'
            popupOverlay.style.display = 'none'
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

        popupOverlay.addEventListener('click', () => {
            closeModal()
        })

    }

    bindModal('.sign__btn', '.popup-close', '.popup-send-form',)
    bindModal('.video-about__btn', '.popup-close', '.popup-video-about')

}