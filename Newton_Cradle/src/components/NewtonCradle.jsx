import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  /* gap: 2rem; */
  border-top: 0.5rem solid #4f4557;
  padding: 0 1rem;
  span {
    width: 0.3rem;
    height: 15rem;
    margin: 0 0.85rem;
    background-color: #4f4557;
    display: inline-block;
    position: relative;
    &::before {
      content: "";
      transform: translateX(-40%);
      position: absolute;
      border-radius: 50%;
      width: 2rem;
      height: 2rem;
      bottom: 0;
      background-color: #6d5d6e;
    }

    &:first-child {
      animation: left-child 3s linear infinite;
      transform-origin: top;
    }
    @keyframes left-child {
      0% {
        rotate: 0deg;
      }
      25% {
        rotate: 60deg;
      }
      50% {
        rotate: 0deg;
      }
      100% {
        rotate: 0deg;
      }
    }

    &:last-child {
      animation: right-child 3s linear infinite 1.5s;
      transform-origin: top;
    }
    @keyframes right-child {
      0% {
        rotate: 0deg;
      }
      25% {
        rotate: -60deg;
      }
      50% {
        rotate: 0deg;
      }
      100% {
        rotate: 0deg;
      }
    }
  }
`;

const NewtonCradle = () => {
  return (
   <>
    <h2 style={{color:"white",textTransform:"uppercase"}}>newton cradle</h2>
    <Wrapper>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </Wrapper>
   </>
  );
};

export default NewtonCradle;
