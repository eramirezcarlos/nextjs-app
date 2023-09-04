import Link from "next/link";
function EventItem(props) {
  //console.log( "desde item ", props.item );
  const { title, image, date, location, id } = props;

  const humanReadableDate = new Date( date  ).toLocaleDateString('en-US',{
    day:'numeric',
    month: 'long',
    year: 'numeric'
  });

  const formattedAddress = location.replace(', ','\n');

  const exploreLink = '';

  return (
    <li key={id}>
      <img src={'/'+image} alt={title} />
      {/* div for the info */}
      <div>
        <div>
          <h2>{title}</h2>
        </div>
        <div>
          <time>{humanReadableDate}</time>
        </div>
        <div>
          <address>{formattedAddress}</address>
        </div>
      </div>
      <div>
        <Link href="/">Explore Event </Link>
      </div>
    </li>
  );
}
export default EventItem;
