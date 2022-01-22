import React from 'react'
import MeetupList from '../components/meetups/MeetupList'

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80',
        address: 'Some address 5, 1234 Some City',
        description: 'This is a first meetup!'
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
        address: 'Some address 12, 2057 Some City',
        description: 'This is a second meetup!'
    }
]

/*
    This getStaticProps() function is a reserved function/keyword of nextjs
    Nextjs checks if it's declared, and it will run this function on the server side
    when builiding. Which means this will always execute first before a component is rendered.

    This is where you would fetch data from APIs to be passed to your components.
    It's required that you return an object with a "props" property,
    and that's where you pass the data that you want your component to receive.
*/
export async function getStaticProps() {
    // Fetch data here from an api
    return {
        props: {
            test: "testing",
            meetups: DUMMY_MEETUPS
        }
    }
}

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
