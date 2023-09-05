import Link from "next/link";
import classes from './EventItem.module.css';
import Button from "../ui/button";

function EventItem(props) {
  //console.log( "desde item ", props.item );
  const { title, image, date, location, id } = props;

  const humanReadableDate = new Date( date  ).toLocaleDateString('en-US',{
    day:'numeric',
    month: 'long',
    year: 'numeric'
  });

  const formattedAddress = location.replace(', ','\n');

  const exploreLink = `/events/${id}`;

  return (
    <li key={id} className={classes.item}>

      <img src={'/'+image} alt={title} />

      {/* div for the info */}
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
        
          <div className={classes.date}>
            <time>{humanReadableDate}</time>
          </div>

          <div className={classes.address}>
            <address>{formattedAddress}</address>
          </div>

        </div> 
        <div className={classes.actions}>

          <Button link={exploreLink}>Explore Event</Button>
        </div>

      </div>  
    </li>
  );
}
export default EventItem;
