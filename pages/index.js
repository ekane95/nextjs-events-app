import { Fragment } from 'react';
import Head from 'next/head';

import EventList from '../components/events/event-list';
import { getFeaturedEvents } from '../dummy-data';

function HomePage(props) {
  const featuredEvents = getFeaturedEvents();

  return (
    <Fragment>
      <Head>
        <title>Events App</title>
        <meta
          name='description'
          content='Events about programming and web development.'
        />
      </Head>

      <EventList items={featuredEvents} />

    </Fragment>
  );
}

export default HomePage;
