export const popup = () => {
    const bindModal = (openPopup, closePopup, contentPopup) => {
        const popupOpen = document.querySelector(openPopup)
        const popupCloseBtns = document.querySelectorAll(closePopup)
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

        popupCloseBtns.forEach(btn => {
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

    bindModal('.promotion__btn--1', '.popup-close', '.promotion-popup--1')
    bindModal('.promotion__btn--2', '.popup-close', '.promotion-popup--2')
    bindModal('.promotion__btn--3', '.popup-close', '.promotion-popup--3')
    bindModal('.promotion__btn--4', '.popup-close', '.promotion-popup--4')
    bindModal('.promotion__btn--5', '.popup-close', '.promotion-popup--5')
    bindModal('.promotion__btn--6', '.popup-close', '.promotion-popup--6')
}