const emojiIcon = document.querySelector('#emojiIcon')


async function changeEmojiOnHover() {
    const response = await fetch("emojis.json")
    const emojis = await response.json()
    emojiIcon.addEventListener('mouseover', () => {
        emojiIcon.innerHTML = emojis[Math.floor(Math.random() * emojis.length)]
    })
}

emojiIcon.addEventListener(onmouseover, changeEmojiOnHover())