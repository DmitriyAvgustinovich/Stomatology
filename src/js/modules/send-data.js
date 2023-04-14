export const sendData = () => {

    const sendForm = document.querySelector('.send-form')
    const message = document.querySelector('.message-box')
    const sendInputs = document.querySelectorAll('.send-form__input')

    sendInputs.forEach(e => {
        e.setAttribute('required', true)
    })

    sendForm.addEventListener('submit', (e) => {
        e.preventDefault()

        const name = document.querySelector('#name').value
        const phone = document.querySelector('#phone').value

        const data = { name, phone }

        const maxLengthInput = 10

        if (name.length > maxLengthInput) {
            message.textContent = `Максимальное допустимое количество символов: ${maxLengthInput}`
            return
        }

        fetch('https://windows-el7h.onrender.com/api/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                response.text()

                const setTimeClear = () => {
                    setTimeout(() => {
                        message.textContent = ''
                    }, 4000)
                }

                if (response.ok) {
                    message.textContent = 'Спасибо за заявку!'
                    document.querySelector('#name').value = ''
                    document.querySelector('#phone').value = ''
                    setTimeClear()
                } else {
                    message.textContent = 'Что-то пошло не так.'
                    setTimeClear()
                }
            })
            .catch(error => console.log(error))
    })

}