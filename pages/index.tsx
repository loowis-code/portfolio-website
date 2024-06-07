import Layout from '@/components/layout';
import Introduction from '@/components/introduction';
import AboutMe from '@/components/aboutme';
import Projects from '@/components/projects';

function Home() {
    return (
        <Layout>
            <Introduction/>
            <AboutMe/>
            <Projects/>
        </Layout>
    )
}

export default Home