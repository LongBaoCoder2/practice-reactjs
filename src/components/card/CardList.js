import React from "react";
import Card from "./Card";
import styled from "styled-components";

const StyledCardList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 100px;
  padding: 30px;
  margin: 0 auto;
`;

const CardList = () => {
  return (
    <StyledCardList>
      <Card img="https://cdn.dribbble.com/users/2400293/screenshots/19662835/media/fa1a4b1b63d03f7a77ed3e18dab6301e.png"></Card>
      <Card img="https://cdn.dribbble.com/users/2400293/screenshots/19411390/media/531fa617398ac4b6c3696a6444a5b31f.png"></Card>
      <Card img="https://cdn.dribbble.com/users/2400293/screenshots/18247514/media/a567a2e47559db2d934d78f898ce78af.png"></Card>
      <Card img="https://cdn.dribbble.com/users/2400293/screenshots/16378193/media/e9ad5ebe9dd6822be9ee622c7465d9e5.png"></Card>
      <Card img="https://cdn.dribbble.com/users/2400293/screenshots/19271835/media/68c947aa286ed6573929bc2655acff49.png"></Card>
      <Card img="https://cdn.dribbble.com/users/2400293/screenshots/16758868/media/8a20438ee0cbb3ffaa0108523e7e1875.png"></Card>
    </StyledCardList>
  );
};

export default CardList;
