import { useState, useEffect } from 'react'
import { firestore } from './firebase'

const useCollection = (collection) => {
    const [docs, setDocs] = useState([])

    useEffect(() => {
        const unsubs = firestore.collection(collection)
            .orderBy('createdAt', 'desc')
            .onSnapshot(snapshot => {
                let documents = [];
                snapshot.forEach((doc) => {
                    documents.push({ ...doc.data(), id: doc.id });
                });
                setDocs(documents)
            })

        return () => unsubs()
    }, [collection])

    return { docs }
}

export default useCollection
