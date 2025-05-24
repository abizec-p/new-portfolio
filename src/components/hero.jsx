import plant from "../assets/img/planttt.png"
import Works from "./work"
export default function Hero(){
    return(<>
        <section className="hero">
            <div className="main">
                <img src={plant} alt="plant picture" />
                <h3>Hi,I am a web developer, i'm just too lazy to put anything in my homepage.
                    <br /> Why don't you start scrolling? </h3>

            </div>

        </section>
        <section className="work">
            <Works/>
        </section>
        </>

    )
}