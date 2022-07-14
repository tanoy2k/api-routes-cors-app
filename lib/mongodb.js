import { MongoClient } from 'mongodb'

options = {}
const client = new MongoClient(uri, options);
        
clientPromise = client.connect()


// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
