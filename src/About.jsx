import confetti from "canvas-confetti"

export default function About() {
    function shootConfetti() {
        confetti({
            particleCount: 450,
            spread: 120,
            colors: ['#3bd7ff', '#ffae1a', '#800080', '#66ff67', '#ffff00'],
            shapes:['circle'],
            scalar: 0.6
        })
    }

    return (
        <div className="App">
            <h1>About</h1>
            <p>This is the about page.</p>
            <p>This page is about my favourite subject: Me!</p>
            <button onClick={shootConfetti}>Do You Like?</button>
        </div>
    )
}