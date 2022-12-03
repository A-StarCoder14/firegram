import { CollectionReference, DocumentData, getDocs, query, orderBy, onSnapshot, collection } from "firebase/firestore"
import { useEffect, useState } from "react"
import { projectFireStore } from "./firebase/config"


export const useFirestore = (collections: string) => {
    const [docs, setDocs] = useState<any[]>([])

    useEffect(() => {
       const q = query(collection(projectFireStore, collections), orderBy("createdAt", "desc"))
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let documents: any[] = []            
            querySnapshot.forEach(each => {
                documents.push({...each.data(), id: each.id})
            })
            setDocs(documents)
        })
        return () => unsubscribe()
    } , [collection])
    return {docs}
}