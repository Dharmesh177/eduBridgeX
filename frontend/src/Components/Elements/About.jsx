import React from "react";
import styled from "styled-components";

export default function About() {
  return (
    <Wrapper>
        <p className="font13" style={{alignContent: "center"}}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  padding: 20px 30px;
  margin-top: 30px;
`;
