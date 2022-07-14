import { MongoClient } from 'mongodb'


const uri = "mongodb+srv://dolarboy:dolarboy@ff4helper.oidxnqu.mongodb.net/?retryWrites=true&w=majority";

const options = {}

let client
let clientPromise




// In production mode, it's best to not use a global variable.
client = new MongoClient(uri, options)
clientPromise = client.connect()


// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise
