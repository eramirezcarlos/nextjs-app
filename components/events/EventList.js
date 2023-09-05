import AllEventsPage from "@/pages/events";
import EventItem from "./EventItem";
import classes from './EventList.module.css';


function EventList( props){

    //de-structuring
    const { items } = props;

    return (
        <ul classes={classes.list} >
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