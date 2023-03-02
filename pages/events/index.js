import { Fragment } from 'react';
import Head from 'next/head';

function AllEventsPage(props) {


    return (
        <Fragment>
            <Head>
                <title>Events List</title>
                <meta
                    name='description'
                    content='Events about programming and web development.'
                />
            </Head>



            {/* <Hero /> */}
            {/* <FeaturedPosts posts={props.posts} /> */}



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

export default AllEventsPage;
