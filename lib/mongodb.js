import { MongoClient } from 'mongodb'

export const Data = ()=>{
    return new Promise((resolve, reject)=>{
        const uri = "mongodb+srv://dolarboy:dolarboy@ff4helper.oidxnqu.mongodb.net/?retryWrites=true&w=majority";
        MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
            if (err) return reject(err)
            const db = client.db('dolarboy')
            const collection = db.collection('dolarboy')
            collection.find({}).toArray((err, docs) => {
                if (err) return reject(err)
                resolve(docs)
            })
        })
    })
}


// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.


// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
