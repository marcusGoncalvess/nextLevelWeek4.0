import { Container } from '../styles/pages/home';
import ExperienceBar from '../components/ExperienceBar';
import Profile from '../components/Profile';
import CompletedChallenges from '../components/CompletedChallenges';
import Countdown from '../components/Countdown';
 
import Head from 'next/head';

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Início | Moveit</title>
      </Head>
      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div></div>
      </section>
    </Container>
  );
}
