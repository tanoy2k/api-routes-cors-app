import type { NextApiRequest, NextApiResponse } from 'next'
import Cors from 'cors'
import { MongoClient, ServerApiVersion } from "mongodb";

// Initializing the cors middleware
// You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
const cors = Cors({
  methods: ['POST', 'GET', 'HEAD'],
})

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Run the middleware
  await runMiddleware(req, res, cors)


  // Initialize the database connection
  // fetch the JSON data from Mongo Atlas
  const uri = "mongodb+srv://dolarboy:dolarboy@ff4helper.oidxnqu.mongodb.net/?retryWrites=true&w=majority";
  try {
      const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
      client.connect(err => {
          const collection = client.db("dolarboy").collection("dolarboy");

          let filter = {

              document: "dolarboy-cards"

          };
          collection.find(filter).sort({ _id: -1 }).limit(1).toArray(function (err, result) {
              if (err) throw err;
              console.log(result);
              res.json(result);
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
      res.json(err);
  }

  // Rest of the API logic
  //res.json({ message: 'Hello Everyone!' })
}

