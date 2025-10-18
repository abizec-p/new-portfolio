import "./photography.css"

const galleryImage = import.meta.glob("/src/assets/galleryimg/*.{jpg,jpeg,png,webp,JPG}",{eager:true});
const imgUrl = Object.values(galleryImage).map(img=>img.default); 



export default function Photography(){


    console.log(imgUrl)
    return(
        <section className="main-section">
            <div className="top-line-photography">
                <h1>Photography</h1>
                <a target="_blank" href="https://www.flickr.com/photos/202548046@N04/">My Flickr profile</a>
                <a target="_blank" href="https://www.instagram.com/pariyar_abizake/">My Instagram profile</a>
            </div>
            <div className="main-content-photography">
                <div className="main-gallery">

                    {imgUrl
                    .slice()
                    .reverse()
                    
                    .map((src,i) =>(
                        <img  key={i} src={src} alt="`image-${i}"/>

                    ))};


                </div>
            </div> 
             
        </section>
    )
}