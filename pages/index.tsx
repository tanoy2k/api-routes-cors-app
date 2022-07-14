import Head from 'next/head'
import clientPromise from '../lib/mongodb'

export default function Index({ isConnected }) {
  return (
    <><small>isConnected: {isConnected}</small>
      <p>
        To test the CORS route, open the console in a new tab on a different
        domain and make a POST / GET / OPTIONS request to <b>/api/cors</b>. Using
        a different method from those mentioned will be blocked by CORS
      </p>
    </>

  )
}
