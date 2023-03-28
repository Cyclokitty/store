import ConfettiBtn from "./components/ConfettiBtn";

export default function About() {

    return (
        <div className="App">
            <h1>About</h1>
            <p>This is the about page.</p>
            <p>This page is about my favourite subject: Me!</p>
            <ConfettiBtn btnText='Celebrate!' coloursList={['#3bd7ff', '#ffae1a', '#800080', '#66ff67', '#ffff00']}/>
        </div>
    )
}