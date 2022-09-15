import EventItem from "./event-item";
import classes from "./event-list.module.css";

function EventList({ items: events }) {
  return (
    <ul className={classes.list}>
      {events.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </ul>
  );
}

export default EventList;
