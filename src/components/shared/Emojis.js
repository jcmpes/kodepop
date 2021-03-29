import React from 'react';

function Emojis() {
    const emojis = ['🏎', '🏍', '🛸', '🛥', '📱', '💻', '⌚️', '🎸', '🏺', '🪑']
    function chooseUnrepeatedRandom(n, emoji) {
        // Use some simple recursion to avoid emoji repetition
        let newEmoji = emojis[Math.floor(Math.random() * n)]
        if (newEmoji === emoji) {
            chooseUnrepeatedRandom(n, newEmoji)
        }
        return newEmoji 
    }



    const [emoji, setEmoji] = React.useState(chooseUnrepeatedRandom(emojis.length, emojis[0]))

    React.useEffect(() => {
        setInterval(() => {            
            setEmoji(chooseUnrepeatedRandom(emojis.length, emoji))
        }, 2100)
    }, [])

    return (
        <div style={{ minWidth: '40px' }}>{emoji}</div>
    )
}

export default Emojis