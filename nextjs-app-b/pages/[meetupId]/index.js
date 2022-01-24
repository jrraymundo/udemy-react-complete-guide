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
export function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            {
                params: { meetupId: 'm1' }
            },
            {
                params: { meetupId: 'm2' }
            }
        ]
    }
}

/*
    When a param needs to be accesed from the url in getStaticProps
    you can access it using the context argument. 
    
    Note that getStaticPaths is also required when using context.params
*/
export async function getStaticProps(context) {
    const { meetupId } = context.params
    return {
        props: {
            meetupData: {
                id: meetupId,
                image: 'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80',
                title: 'First Meetup',
                address: 'Some Street 5, Some City',
                description: 'This is a first meeetup'
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
