import { MongoClient } from 'mongodb'


result = [{error: 'error'}]

const uri = "mongodb+srv://dolarboy:dolarboy@ff4helper.oidxnqu.mongodb.net/?retryWrites=true&w=majority";
    try {
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
        client.connect(err => {
            const collection = client.db("dolarboy").collection("dolarboy");

            let filter = {

                document: "dolarboy-cards"

            };
            result = collection.find(filter).sort({ _id: -1 }).limit(1).toArray(function (err, result) {
                if (err) throw err;
                console.log(result);
                
                client.close(); 
            }
            );

            /*
            collection.findOne(filter, (err, result) => {
                if (err) return res.status(500).send(err);
                console.log(result.nombre);
                res.send(result);
                client.close();
            });*/

        });
    }
    catch (err) {
        console.log(err);
        
    }

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default result
