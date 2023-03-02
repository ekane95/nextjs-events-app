import Head from 'next/head';

import { Fragment } from 'react';
import { useRouter } from 'next/router';
import { getAllEvents } from '../../dummy-data';

import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';

function AllEventsPage(props) {
    const router = useRouter();
    const event = getAllEvents();

    function findEventsHandler(year, month) {
        const fullPath = `/events/${year}/${month}`;
        router.push(fullPath);
    }

    return <Fragment>
        <Head>
            <title>Events List</title>
            <meta
                name='description'
                content='Events about programming and web development.'
            />
        </Head>

        <EventsSearch onSearch={findEventsHandler} />
        <EventList items={event} />

    </Fragment>
}

export default AllEventsPage;
