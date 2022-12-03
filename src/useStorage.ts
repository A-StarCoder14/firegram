import { useEffect, useState } from "react"
import {projectStorage, projectFireStore} from "./firebase/config"
import {getDownloadURL, ref, StorageError, uploadBytesResumable} from "firebase/storage"
import { FileInterface } from "./types/FileInterface"
import { doc, setDoc, Timestamp} from "firebase/firestore"

export function useStorage(file: FileInterface){

    const [progress, setProgress] = useState<number>(0)
    const [error, setError] = useState<StorageError>(null as unknown as StorageError)
    const [url, setUrl] = useState<string>(null as unknown as string)
   
   
    if(file === undefined || file === null || !file) return
    useEffect(() => {
        const storageRef = ref(projectStorage, file.name)

        const uploadTask = uploadBytesResumable(storageRef, file)
        
        uploadTask.on("state_changed", (snapshot) => {

            const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100

            setProgress(() => percentage)
        }, (error) => {
            setError(() => error)
        }, async() => {
            try {
                const finalUrl = await getDownloadURL(uploadTask.snapshot.ref)
                setUrl(() => finalUrl)
                await setDoc(doc(projectFireStore, "Anwar", file.name), {url: finalUrl, createdAt: Timestamp.now()})
            } catch (error) {
                console.log(error)
            }
        })
    }, [file]
    )
    
    return {progress, error, url}

}