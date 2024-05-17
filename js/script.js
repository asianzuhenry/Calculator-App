const input = document.calcdisplay.numinput
const Buttons = document.querySelectorAll('.button')

const Aud = new Audio(src = "audio/Pop.wav")
// const Audclick = new Audio(src="click.wav")

console.log(Aud);
Buttons.forEach(Button => {
    Button.addEventListener('click', () => {
        input.value += Button.value
        Aud.play()
    })
})
const Eval = () => {
    if (!input.value) {
        input.value = 'No Value Specified...'
        setTimeout(() => {
            input.value = ''
        }, 500);
    } else {
        try {
            input.value = eval(input.value)
            Aud.play()

        } catch (error) {
            console.log(error);
        }
    }
}
const Clear = () => {
    input.value = ''
}

