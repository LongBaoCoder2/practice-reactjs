import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  position: relative;
  &:hover .card-content {
    transform: translate(-50%, 20%);
    transition: 500ms ease-in-out;
  }
`;
const CardImage = styled.div`
  height: 400px;
  width: 100%;
  border-radius: 15px;
`;
const CardImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`;
const CardContent = styled.div`
  width: calc(100% - 36px);
  position: absolute;
  background-color: #fff;
  border-radius: 15px;
  left: 50%;
  transform: translate(-50%, 50%);
  bottom: 0;
  z-index: 10;
  padding: 20px;
  transition: 500ms ease-in-out;
  cursor: pointer;
`;

const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const CardUser = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const CardAvatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100rem;
  object-fit: cover;
  flex-shrink: 0;
`;
const CardReact = styled.div`
  color: #333333;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  gap: 10px;
`;
const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const CardTitle = styled.h3`
  font-size: 1.2em;
  font-weight: bold;
`;
const CardSub = styled.h3`
  font-size: 18px;
  font-weight: 700;
  background: linear-gradient(
    86.88deg,
    #7d6aff 1.38%,
    #ffb86c 64.35%,
    #fc2872 119.91%
  );
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
`;

const Card = (props) => {
  return (
    <StyledCard>
      <CardImage>
        <CardImg src={props.img} alt="" />
      </CardImage>
      <CardContent className="card-content">
        <CardTop>
          <CardUser>
            <CardAvatar src={props.img} alt="" />
            <span>@zndrson</span>
          </CardUser>
          <CardReact>
            <img src="/coolicon.svg" alt="" />
            <span>0802</span>
          </CardReact>
        </CardTop>
        <CardFooter>
          <CardTitle>Cosmic Perpective</CardTitle>
          <CardSub>12,000 PSL</CardSub>
        </CardFooter>
      </CardContent>
    </StyledCard>
  );
};

export default Card;
