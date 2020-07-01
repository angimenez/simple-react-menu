import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";

const MENU_HEIGHT = 50; // ALTURA DEL MENU PARA DESCONTARLA DEL COMPONENTE

export const navigate = (id, duration, menuHeight = MENU_HEIGHT) => {
  const component = document.getElementById(id);
  if (component && duration > 0) {
    const positionY = component.offsetTop - menuHeight;
    if (document.scrollingElement.scrollTop === positionY) return;
    const totalScrollDistance = Math.abs(
      document.scrollingElement.scrollTop - positionY
    );
    let scrollY = document.scrollingElement.scrollTop,
      oldTimestamp = null;
    const stepMore = (newTimestamp) => {
      if (oldTimestamp !== null) {
        scrollY +=
          (totalScrollDistance * (newTimestamp - oldTimestamp)) / duration;
        if (scrollY >= positionY)
          return (document.scrollingElement.scrollTop = positionY);
        document.scrollingElement.scrollTop = scrollY;
      }
      oldTimestamp = newTimestamp;
      window.requestAnimationFrame(stepMore);
    };
    const stepLess = (newTimestamp) => {
      if (oldTimestamp !== null) {
        scrollY -=
          (totalScrollDistance * (newTimestamp - oldTimestamp)) / duration;
        if (scrollY <= positionY)
          return (document.scrollingElement.scrollTop = positionY);
        document.scrollingElement.scrollTop = scrollY;
      }
      oldTimestamp = newTimestamp;
      window.requestAnimationFrame(stepLess);
    };
    const step = (newTimestamp) => {
      if (scrollY < positionY) stepMore(newTimestamp);
      else stepLess(newTimestamp);
    };
    window.requestAnimationFrame(step);
  }
};

const MenuContainer = ({ children }) => {
  const [openmenu, setOpenmenu] = useState(false);

  const handleMenu = (e) => {
    setOpenmenu(!openmenu);
    e.stopPropagation();
  };

  return (
    <>
      <Container visible={openmenu} count={React.Children.count(children)}>
        {openmenu ? (
          <CloseMenuIcon size={30} onClick={handleMenu} />
        ) : (
          <MenuIcon size={30} onClick={handleMenu} />
        )}
        <Content>{children}</Content>
      </Container>
      <Spacing />
    </>
  );
};

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const rotateClose = keyframes`
  0% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const MenuIcon = styled(FiMenu)`
  cursor: pointer;
  background-color: transparent;
  padding: 15px 10px;
  -webkit-animation: ${rotate} 0.9s ease-in-out;
  animation: ${rotate} 0.9s ease-in-out;
  @media (min-width: 813px) {
    display: none;
  }
`;

const CloseMenuIcon = styled(AiOutlineCloseCircle)`
  cursor: pointer;
  background-color: transparent;
  color: red;
  padding: 15px 10px;
  -webkit-animation: ${rotateClose} 0.9s ease-in-out;
  animation: ${rotateClose} 0.9s ease-in-out;
  @media (min-width: 813px) {
    display: none;
  }
`;

const Spacing = styled.div`
  height: 60px;
  width: 100%;
`;

const Container = styled.nav`
  padding: 0;
  width: 100%;
  margin: 0;
  min-height: 60px;
  text-align: left;
  color: white;
  background-color: black;
  position: ${(props) => (props.isContent ? "initial" : "fixed")};
  z-index: 2;
  overflow: hidden;
  @media (max-width: 813px) {
    transition: all 1s;
    height: ${({ visible, count }) => (visible ? count * 65 : 60)}px;
    text-align: center;
  }
`;

const Content = styled.div`
  display: flex;
  height: 60px;
  align-items: center;
  @media (max-width: 813px) {
    flex-direction: column;
  }
`;

export default MenuContainer;
