import { useRouter } from 'next/router';
import { Fragment } from 'react';
import Head from 'next/head';
import { getEventById } from '../../dummy-data';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import ErrorAlert from '../../components/events/error-alert';

function EventDetailPage(props) {
    const router = useRouter();

    const eventId = router.query.eventId;
    const event = getEventById(eventId);

    if (!event) return <Fragment>
        <ErrorAlert>
            <p>No event found!</p>
        </ErrorAlert>
    </Fragment>

    return (
        <Fragment>
            <Head>
                <title>Single Event</title>
                <meta
                    name='description'
                    content='Events about programming and web development.'
                />
            </Head>

            <EventSummary title={event.title} />
            <EventLogistics
                data={event.date}
                address={event.location}
                image={event.image}
                imageAlt={event.title}
            />

            <EventContent>
                <p>
                    {event.description}
                </p>
            </EventContent>

        </Fragment>
    );
}

export default EventDetailPage;
