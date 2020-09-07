const textInput = document.getElementById('textInput')

// "keyup" event runs after you press on the keyboard and lift your finger off
textInput.addEventListener('keyup', (event) => {
    // event.target.value contains the text that was written in the text input
    // open the console and start typing to see what it logs
    console.log(event.target.value)
})