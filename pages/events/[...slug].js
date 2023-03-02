import { Fragment } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';
import ResultsTitle from '../../components/events/results-title';
import Button from '../../components/ui/Button';
import ErrorAlert from '../../components/events/error-alert';

function FilteredEventsPage(props) {

    const router = useRouter();
    const filterData = router.query.slug;

    if (!filterData) return <p className='center'>Loading...</p>;

    // convert string to number
    const numYear = +filterData[0];
    const numMonth = +filterData[1];

    if (
        isNaN(numYear) ||
        isNaN(numMonth) ||
        numYear > 2030 ||
        numYear < 2021 ||
        numMonth < 1 ||
        numMonth > 12
    ) {
        return <Fragment>
            <ErrorAlert>
                <p>Invalid filter. Please adjust your value!</p>
            </ErrorAlert>
            <div className='center'>
                <Button link="/events">Show All Events</Button>
            </div>
        </Fragment>

    }

    const filteredEvents = getFilteredEvents({
        year: numYear,
        month: numMonth
    });

    if (!filteredEvents || filteredEvents.length === 0) {
        return <Fragment>
            <ErrorAlert>
                <p>No Events found for the chosen filter!</p>
            </ErrorAlert>

            <div className='center'>
                <Button link="/events">Show All Events</Button>
            </div>
        </Fragment>
    }

    const date = new Date(numYear, numMonth - 1);

    return <Fragment>
        <Head>
            <title>Filtered Event</title>
            <meta
                name='description'
                content='Events about programming and web development.'
            />
        </Head>

        <ResultsTitle date={date} />
        <EventList items={filteredEvents} />

    </Fragment>
}

export default FilteredEventsPage;
