import Layout from '@/components/layout';
import Introduction from '@/components/introduction';
import AboutMe from '@/components/aboutme';
import Projects from '@/components/projects';
import Contacts from '@/components/contacts';

function Home() {
    return (
        <Layout>
            <Introduction/>
            <AboutMe/>
            <Projects/>
            <Contacts/>
        </Layout>
    )
}

export default Home