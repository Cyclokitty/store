import confetti from "canvas-confetti";

export default function ConfettiBtn({ coloursList, btnText }) {
    function shootConfetti() {
    
        confetti({
            particleCount: 450,
            spread: 120,
            shapes:['circle'],
            scalar: 0.6,
            colors: coloursList,
        })
    }


    return (
        <>           
            <button  onClick={ shootConfetti}>{btnText}</button>
        </>
    )
}