import Layout from '@/components/layout';
import AboutMe from '@/components/aboutme';
import CVAndProjects from '@/components/cv_and_projects';
import Contacts from '@/components/contacts';

function Home() {
    return (
        <Layout>
            <AboutMe />
            <CVAndProjects />
            <Contacts />
        </Layout>
    )
}

export default Home