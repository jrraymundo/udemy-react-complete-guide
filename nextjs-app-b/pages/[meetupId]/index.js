import { MongoClient, ObjectId } from "mongodb"

import MeetupDetail from "../../components/meetups/MeetupDetail"

/* It's common to keep the pages files lean by moving the components/jsx to a separate file*/

/*
    This function is another NextJS reserved function that is required
    if you are using context.params in getStaticProps.

    It's required to also return an object that should have the paths and fallback keys.

    The "paths" key should have an array of objects of the params 
    that are expected to be received by context.params.
    In the example below it's hard coded just as an example.

    The "fallback" should be boolean. It specifies whether the "paths" key
    contains all supported params values or just some of them.
    
    Setting "fallback" to "false" will make NextJS display a 404 page error when user tries to
    access a param not included here, while "true" will just try to display something despite 
    not finding the param
*/
export async function getStaticPaths() {
    const client = await MongoClient.connect(process.env.DB_HOST)
    const db = client.db()

    const meetupsCollection = db.collection('meetups')

    const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray()

    client.close()

    return {
        fallback: false,
        paths: meetups.map(meetup => ({
            params: { meetupId: meetup._id.toString() }
        }))
    }
}

/*
    When a param needs to be accesed from the url in getStaticProps
    you can access it using the context argument. 
    
    Note that getStaticPaths is also required when using context.params
*/
export async function getStaticProps(context) {
    const { meetupId } = context.params
    const client = await MongoClient.connect(process.env.DB_HOST)
    const db = client.db()

    const meetupsCollection = db.collection('meetups')

    const selectedMeetup = await meetupsCollection.findOne({ _id: ObjectId(meetupId) })

    client.close()

    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                image: selectedMeetup.image,
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                description: selectedMeetup.description
            }
        }
    }
}

export default function MeetupDetails(props) {
    return (
        <MeetupDetail 
            id={props.meetupData.id}
            image={props.meetupData.image}
            title={props.meetupData.title}
            address={props.meetupData.address}
            description={props.meetupData.description}
        />
    )
}
