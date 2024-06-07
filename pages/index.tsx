import Layout from '@/components/layout';
import Introduction from '@/components/introduction';
import AboutMe from '@/components/aboutme';

function Home() {
    return (
        <Layout>
            <Introduction/>
            <AboutMe/>
        </Layout>
    )
}

export default Home