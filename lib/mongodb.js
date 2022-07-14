import { MongoClient } from 'mongodb'


const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
        
clientPromise = client.connect()


// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
