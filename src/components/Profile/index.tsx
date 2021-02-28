import React from "react";
import { useChallenges } from "../../contexts/ChallengesContext";

import { Container } from "./styles";

// interface ProfileProps {
//   // children?: ReactNode;
// }

const Profile = () => {
  const { level } = useChallenges();
  return (
    <Container>
      <img src="https://github.com/marcusGoncalvess.png" alt="Marcus" />

      <div>
        <strong>Marcus</strong>
        <div>
          <img src="icons/level.svg" alt="Level" />
          <p>Level {level}</p>
        </div>
      </div>
    </Container>
  );
};

export default Profile;
