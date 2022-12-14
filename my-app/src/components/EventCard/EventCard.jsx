import css from "./EventCard.module.css";
import {
  FaMapMarkerAlt,
  FaUserAlt,
  FaCalendarAlt,
  FaClock,
} from "react-icons/fa";

import { formatEventStart } from "../../utils";
import { formatEventDuration } from "../../utils";

export default function EventCard({ name, location, speaker, type, time }) {
  const formatStart = formatEventStart(time.start);
  const duration = formatEventDuration(time.start, time.end);

  return (
    <div className={css.event}>
      <h2 className={css.title}>{name}</h2>
      <p className={css.info}>
        <FaMapMarkerAlt className={css.icon} />
        {location}
      </p>
      <p className={css.info}>
        <FaUserAlt className={css.icon} />
        {speaker}
      </p>
      <p className={css.info}>
        <FaCalendarAlt className={css.icon} />
        {formatStart}
      </p>
      <p className={css.info}>
        <FaClock className={css.icon} />
        {duration}
      </p>
      <span className={`${css.chip} ${css[type]}`}>{type}</span>
    </div>
  );
}
