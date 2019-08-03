import React, { Component } from "react";
import styled from "styled-components";
import Portal from "./Portal";
import Icon from "./Icon";
import { Elevation, transition } from "Utils";
import { Transition, animated } from "react-spring/renderprops";

const Background = styled(animated.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.9);
`;

const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalCard = styled(animated.div)`
  position: relative;
  background: white;
  min-width: 300px;
  padding: 15px;
  box-sizing: border-box;
  ${Elevation[2]};
  ${transition({ property: "box-shadow" })}
  z-index: 10;
  &:hover {
    ${Elevation[4]};
  }
`;

const CloseButton = styled.button`
  position: absolute;
  right: 5px;
  top: 5px;
`;

export default class Modal extends Component {
  render() {
    const { children, on, toggle } = this.props;
    return (
      <div>
        <Portal>
          <Transition
            items={on}
            native
            from={{ opacity: 0, y: -50 }}
            enter={{ opacity: 1, y: 0 }}
            leave={{ opacity: 0, y: 50 }}
          >
            {on =>
              on &&
              (props => (
                <>
                  <ModalWrapper>
                    <ModalCard
                      style={{
                        transform: props.y.interpolate(y => `translate3d(0,${y}px,0)`),
                        opacity: props.opacity
                      }}
                    >
                      {children}
                      <CloseButton onClick={toggle}>
                        <Icon name="close" />
                      </CloseButton>
                    </ModalCard>
                    <Background style={{ ...props }} onClick={toggle} />
                  </ModalWrapper>
                </>
              ))
            }
          </Transition>
        </Portal>
      </div>
    );
  }
}
