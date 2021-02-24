import { Container } from '../styles/pages/home';
import ExperienceBar from '../components/ExperienceBar';
import Profile from '../components/Profile';
 
export default function Home() {
  return (
    <Container>
      <ExperienceBar />

      <section>
        <div>
          <Profile></Profile>
        </div>
        <div></div>
      </section>
    </Container>
  );
}
