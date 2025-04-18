export default function Contact(){

    return(
        <section className="contact">
            <div className="contact-heading">
            <h1>So you like my works?</h1>
            <p>"Feel free to reach out for any inquiries or collaborations—i'd love to hear from you! Whether you have a project in mind or just want to connect, don't hesitate to get in touch."</p> <br />
            <div className="contact-details">
                <p>here are my details</p>
                <li>+14376651393</li>
                <li>pariyarabishek60@gmail.com</li>
                <li>Mississauga, ON, Canada</li>
            </div>
            <div className="message-me">
                <h1>Or just say hi,</h1>
                <div className="message-form">
                    <input placeholder="name" type="text" />
                    <input placeholder="email" type="text" />
                    <textarea placeholder="your message" name="" id=""></textarea>
                    <button>send</button>
                </div>
            </div>

            </div>
          
            
        </section>
    )
}