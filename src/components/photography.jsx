import { useEffect, useState } from "react";
import "./photography.css"
import { AnimatePresence, motion } from "framer-motion";

const galleryImage = import.meta.glob("/src/assets/galleryimg/*.{jpg,jpeg,png,webp,JPG}",{eager:true});
const imgUrl = Object.values(galleryImage).map(img=>img.default); 



export default function Photography(){
    const [isClicked, setIsClicked] = useState(false);

    useEffect(()=>{
        if(isClicked){
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
    })




    return(
        <section className="main-section">
            <div className="top-line-photography">
                <h1>Photography</h1>
                <a target="_blank" href="https://www.flickr.com/photos/202548046@N04/">My Flickr profile</a>
                <a target="_blank" href="https://www.instagram.com/pariyar_abizake/">My Instagram profile</a>
            </div>
            <div className="main-content-photography">
                <div  className="main-gallery">

                    {imgUrl
                    .slice()
                    .reverse()
                    
                    .map((src,i) =>(
                        <img
                        onClick={()=>setIsClicked(src)} 
                        
                        
                        key={i} src={src} alt="`image-${i}"/>

                    ))};


                </div>

                {isClicked && <div>
                    <AnimatePresence>
                        <motion.div
                        initial={{scale:0.8}}
                        animate={{scale:1}}
                        exit={{scale:0.8}}
                              transition={{ duration: 0.25, ease: "easeOut" }}

                        className="gallery-modal-background"

                        onClick={()=>setIsClicked(null)}
                    
                        >
                            <motion.div
                            initial={{scale:0.8}}
                        animate={{scale:1}}
                        exit={{scale:0.8}}
                              transition={{ duration: 0.25, ease: "easeOut" }}

                        className="gallery-modal"
                        onClick={(e)=>e.stopPropagation()}
                        
                            
                            >
                                 <img src={isClicked} alt="`image-${i}"/>
                                


                            </motion.div>
                            
                        </motion.div>
                    </AnimatePresence>




                </div>
                    
                

                
                
                
                
                
                
                
                
}

            </div> 

             
        </section>
    )
}