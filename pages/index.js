import { getFeaturedEvents  } from "@/dummy-data";
import EventList from "../components/events/EventList";

function HomePage() {

  const featuresEvents = getFeaturedEvents();

  return (
    <div>
      <ul>
        <EventList items={featuresEvents} />
      </ul>
    </div>
  );
}
export default HomePage;
