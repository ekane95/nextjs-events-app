import { Fragment } from 'react';
import Head from 'next/head';

function FilteredEventsPage(props) {
    return (
        <Fragment>
            <Head>
                <title>Filtered Event</title>
                <meta
                    name='description'
                    content='Events about programming and web development.'
                />
            </Head>
            {/* <Hero /> */}
            {/* <FeaturedPosts posts={props.posts} /> */}

            Filtered Events

        </Fragment>
    );
}

// export function getStaticProps() {
//   const featuredPosts = getFeaturedPosts();

//   return {
//     props: {
//       posts: featuredPosts,
//     },
//   };
// }

export default FilteredEventsPage;
