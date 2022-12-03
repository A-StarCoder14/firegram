import {motion} from "framer-motion"

type ModalProps = {
    selectedImage: string
    setSelectedImage: React.Dispatch<React.SetStateAction<string>>
}

export function Modal({selectedImage, setSelectedImage}: ModalProps){

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        (e.target as Element ).classList.contains("backdrop") ? setSelectedImage("") : null
    }


    return(
        <motion.div className="backdrop" onClick={handleClick} initial={{opacity: 0.5}} animate={{opacity: 1}}>
            <motion.img initial={{y: "-100vh"}} animate={{y: 0}} src={selectedImage} alt="" />
        </motion.div>
    )
}