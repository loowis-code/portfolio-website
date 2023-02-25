import Layout from '@/components/layout';
import AboutMe from '@/components/aboutme';
import CVAndProjects from '@/components/cv_and_projects';

function Home() {
    return (
        <Layout>
            <AboutMe />
            <CVAndProjects />
        </Layout>
    )
}

export default Home