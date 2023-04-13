export const sendData = () => {

    const sendForm = document.querySelector('.send-form')
    const message = document.querySelector('.message-box')

    sendForm.addEventListener('submit', (e) => {
        e.preventDefault()

        const name = document.querySelector('#name').value
        const phone = document.querySelector('#phone').value

        const data = { name, phone }

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
                    }, 3000)
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