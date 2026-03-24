import contactImg from "../assets/img/contact-us-img.png"
export default function Contact(){

    return(
        <section className="contact">
            <div className="contact-heading">
            <h1>Contact Me</h1>
            <p>"Feel free to reach out for any inquiries or collaborations—i'd love to hear from you! Whether you have a project in mind or just want to connect, don't hesitate to get in touch."</p> <br />
                        </div>

 <div className="contact-boxes">

  <div className="contact-card">
    <i className="fa-solid fa-phone"></i>
    <h4>Call Me</h4>
    <p>+1(437) 665-1393</p>
  </div>

  <div className="contact-card">
    <i className="fa-solid fa-envelope"></i>
    <h4>Email Me</h4>
    <p>pariyarabishek60@gmail.com</p>
  </div>

  <div className="contact-card">
    <i className="fa-solid fa-location-dot"></i>
    <h4>Location</h4>
    <p>Mississauga, ON, Canada</p>
  </div>

</div>
           

          
            
        </section>
    )
}