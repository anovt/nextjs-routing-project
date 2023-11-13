import EventItem from './event-item';
import classes from './event-list.module.css';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
function EventList(props) {
  const { items } = props;

  const { push } = useRouter();
  useEffect(() => {
    //push('/');
 }, []);

  return (
    <ul className={classes.list}>
      {items.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          location={event.location}
          date={event.date}
          image={event.image}
        />
      ))}
    </ul>
  );
}

export default EventList;
