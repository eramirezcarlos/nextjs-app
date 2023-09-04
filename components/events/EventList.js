import AllEventsPage from "@/pages/events";
import EventItem from "./EventItem";

function EventList( props){

    //de-structuring
    const { items } = props;

    //console.log( "Event list items ", items );


    return (
        <ul>
            {items.map( (event) => (<EventItem 
            
                key={event.id}
                id={event.id}
                title={event.title}
                location={event.location}
                date={event.date}
                image={event.image}
            
            
            />))}  


        </ul>
    );

}
export default EventList;