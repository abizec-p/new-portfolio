import plant from "../assets/img/planttt.png"
import Works from "./work"
export default function Hero(){
    return(<>
        <section className="hero">
            <div className="main">
                <img src={plant} alt="plant picture" />
                <h3>"Hi, I'm Abishek Pariyar — a passionate Web Developer and Designer dedicated to building responsive, user-focused websites that blend creativity with clean code."
                <br />Lets start scrolling</h3>

            </div>

        </section>
        <section className="work">
            <Works/>
        </section>
        </>

    )
}