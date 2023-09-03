import Link from 'next/link';
function EventItem( props ){

    //console.log( "desde item ", props.item );
    const {title, image, date, location, id } = props;

    return (
        <li key={id}>
            <img src="" alt="" />
            <div>
                <h2>{title}</h2>
            </div>
            <div>
                <time>{date}</time>
            </div>
            <div>
                <address>{location}</address>
            </div>
            <div>
                <Link href="/">Explore Event </Link>
            </div>
        </li>

    );

}
export default EventItem;