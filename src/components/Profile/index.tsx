import React from "react";

import { Container } from "./styles";

// interface ProfileProps {
//   // children?: ReactNode;
// }

const Profile = () => {
  return (
    <Container>
      <img src="https://github.com/marcusGoncalvess.png" alt="Marcus" />

      <div>
        <strong>Marcus</strong>
        <div>
          <img src="icons/level.svg" alt="Level" />
          <p>Level 1</p>
        </div>
      </div>
    </Container>
  );
};

export default Profile;
