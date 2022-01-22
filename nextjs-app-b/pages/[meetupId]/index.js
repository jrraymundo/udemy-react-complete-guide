import MeetupDetail from "../../components/meetups/MeetupDetail"

/*
    It's common to keep the pages files lean by moving the components/jsx to a separate file
*/

export default function MeetupDetails() {
    return (
        <MeetupDetail 
            image='https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80'
            title='First Meetup'
            address='Some Street 5, Some City'
            description='This is a first meeetup'
        />
    )
}
