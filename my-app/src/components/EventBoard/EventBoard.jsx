import css from "./EventBoard.module.css";
import EventCard from "../EventCard/EventCard";

export default function EventBoard({ events }) {
  return (
    <div className={css.eventBoard}>
      {events.map((event) => (
        <EventCard
          key={event.name}
          name={event.name}
          location={event.location}
          speaker={event.speaker}
          type={event.type}
          time={event.time}
        />
      ))}
    </div>
  );
}
