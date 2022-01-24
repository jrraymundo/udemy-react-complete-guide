/*
    It's ok to import packages for server side code here
    When a package like MongoClient is imported for use in server-side code like getStaticProps(),
    NextJS will check if you only used it for server-side, and will not include it
    in your client-side bundle when you build. So that's good for security and optimization.
 */
import { MongoClient } from 'mongodb'

import MeetupList from '../components/meetups/MeetupList'

/*
    This getStaticProps() function is a reserved function/keyword of nextjs
    Nextjs checks if it's declared, and it will run this function on the server side
    when builiding. Which means this will always execute first before a component is rendered.

    This is where you would fetch data from APIs to be passed to your components.
    It's required that you return an object with a "props" property,
    and that's where you pass the data that you want your component to receive.
*/
export async function getStaticProps() {
    /*
        Since getStaticProps() runs in the server-side
        you can technically write your data fetching logic here, 
        because this will not be exposed in the client side
        and so you can skip the extra step of calling your APIs in "./pages/api"

        But it may still be a better idea to put this logic in a separate file
        and just import to invoke it here.
    */
    const client = await MongoClient.connect(process.env.DB_HOST)
    const db = client.db()

    const meetupsCollection = db.collection('meetups')

    const meetups = await meetupsCollection.find().toArray()
    console.log(meetups)

    client.close()

    return {
        props: { 
            meetups: meetups.map(meetup => ({
                id: meetup._id.toString(),
                title: meetup.title,
                address: meetup.address,
                image: meetup.image
            }))
        }
    }
}

/*
    Similar to `getStaticProps`. It’s also a reserved function that NextJS runs in the server side. 
    It runs similarly, but this function gets executed on the server side on runtime (every request) 
    which makes it a better choice if you need some data to be updated or checked really frequently.

    Similar to `ExpressJS`, it takes an argument called `context` 
    that you can use to access server-side information like headers, cookies etc.

    If you don’t need any of these features, 
    then `getStaticProps` is a better choice because it’s faster.
*/
// export async function getServerSideProps(context) {
//     const {req, res} = context

//     // Fetch data here from an api

//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     }
// }

export default function HomePage(props) {
    /*
        Since we're using nextjs' nextStaticProps(). 
        There's no need to use useState or useEffect in this component to fetch and store data.
        The data from the API will be received from the props already/
    */
    console.log(props)

    return (
        <MeetupList meetups={props.meetups} />
    )
}
