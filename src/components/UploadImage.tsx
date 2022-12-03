import { useEffect, useState } from "react"
import { useFirestore } from "../useFirestore"
import {motion} from "framer-motion"
import {BallTriangle} from "react-loader-spinner"

type ObjectType = {
    setSelectedImage:  React.Dispatch<React.SetStateAction<string>> 
}


export function UploadImage({setSelectedImage}: ObjectType){



const answer = useFirestore("Anwar")
useEffect(() => {

if(answer.docs && answer.docs.length > 0){
console.log(answer.docs)

}
}, [answer.docs[0]])


return(
    <div className="img-grid">
        {answer.docs.map(doc => (
            <motion.div className="img-wrap"  whileHover={{opacity: 1}} key={doc.id} onClick={(e) => setSelectedImage(doc.url)} layout>
               <motion.div className="absoluter" initial={{opacity:1}} animate={{opacity:0, x: "-100vw"}} transition={{delay:1}}><BallTriangle height="80" width="80" color="#efb6b2" /></motion.div> 
                <motion.img src={doc.url} alt="some image" className="img" initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 1}}/>
            </motion.div>
        ))}
    </div>
)
}