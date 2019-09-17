import React, { useState } from "react";
import styled from "styled-components";

const LifeBar = styled.div`
  width: ${props => (props.hp ? props.hp : "100%")};
  background-color: ${props => (props.color ? props.color : "red")};
  height: 24px;
  padding-top: 5px;
  font-size: 13px;
  z-index: 1;
  border-radius: 5px;
  color: #fff;
  font-weight: bold;
`;

const ActionsBar = styled.div`
  display: flex;
  flex-direction: row wrap;
  justify-content: center;
  align-items: center;
`;

const ButtonAtk = styled.button`
  padding: 5px 10px;
  background-color: "#6C3483";
`;

const Step03 = () => {
  const [lifeHero, setLifeHero] = useState(100);
  const [lifeMonster, setLifeMonster] = useState(100);

  return (
    <div>
      <h1>Aprendendo sobre hooks</h1>
      <LifeBar color="green" hp={`${lifeHero}%`}>
        {lifeHero}
      </LifeBar>
      <LifeBar color="red" hp={`${lifeMonster}%`}>
        {lifeMonster}
      </LifeBar>
      <ActionsBar>
        <ButtonAtk onClick={() => setLifeHero(lifeHero - 25)}>
          Atacar Hero
        </ButtonAtk>
        <ButtonAtk onClick={() => setLifeMonster(lifeMonster - 25)}>
          Atacar Monstro
        </ButtonAtk>
      </ActionsBar>
    </div>
  );
};

export default Step03;
